import fs from 'fs';
import path from 'path';
import ejs from 'ejs';
import type { API, FileInfo, Options } from 'jscodeshift';

const LIB_CONFIGS: Record<string, any> = {
  eslint: {
    processPackageJson: {
      recommendedVersion: '^7.22.0',
      removePackagesReg: /eslint-.*/g, // remove all other eslint-xx packages
    },
    processOriginalConfig: {
      configFileName: '.eslintrc',
      removeConfigKeys: ['extends', 'plugins'],
    },
    generateFiles: {
      ignoreFile: '.eslintignore',
      configFile: '.eslintrc.js',
      configFileTemplate:
        'const { getESLintConfig } = require(\'@applint/spec\');\n' +
        '\n' +
        '// https://www.npmjs.com/package/@applint/spec\n' +
        'module.exports = getESLintConfig(\'<%= eslintRuleKey %>\'<% if (customConfig) { %>, <%- JSON.stringify(customConfig, null, \'  \') %><% } %>);\n',
    },
  },
  stylelint: {
    processPackageJson: {
      recommendedVersion: '^13.7.2',
      removePackagesReg: /stylelint-.*/g, // remove all other stylelint-xx packages
    },
    processOriginalConfig: {
      configFileName: '.stylelintrc',
      removeConfigKeys: ['extends', 'plugins'],
    },
    generateFiles: {
      ignoreFile: '.stylelintignore',
      configFile: '.stylelintrc.js',
      configFileTemplate:
        'const { getStylelintConfig } = require(\'@applint/spec\');\n' +
        '\n' +
        '// https://www.npmjs.com/package/@applint/spec\n' +
        'module.exports = getStylelintConfig(\'<%= ruleKey %>\'<% if (customConfig) { %>, <%- JSON.stringify(customConfig, null, \'  \') %><% } %>);\n',
    },
  },
  prettier: {
    processPackageJson: {
      recommendedVersion: '^2.1.0',
      configFileReg: /\.prettierrc\.(js|json)$/, // only process js and json file
    },
    generateFiles: {
      ignoreFile: '.prettierignore',
      configFile: '.prettierrc.js',
      configFileTemplate:
        'const { getPrettierConfig } = require(\'@applint/spec\');\n' +
        '\n' +
        '// https://www.npmjs.com/package/@applint/spec\n' +
        'module.exports = getPrettierConfig(\'<%= ruleKey %>\'<% if (customConfig) { %>, <%- JSON.stringify(customConfig, null, \'  \') %><% } %>);\n',
    },
  },
}

const IGNORE_FILE_TEMPLATE = `node_modules/
lib/
dist/
build/
tests/
__tests__/
coverage/
demo/
es/
.rax/
.ice/
`;

const SCRIPT_TEMPLATE = {
  eslint: 'eslint --fix --ext  .js,.jsx,.ts,.tsx ./',
  stylelint: 'stylelint "**/*.{css,scss,less}"',
  prettier: 'prettier **/* --write',
  lint: 'npm run eslint && npm run stylelint',
};

export default function(fileInfo: FileInfo, api: API, options: Options) {
  const j = api.jscodeshift;
  const { path: filePath, source } = fileInfo;
  const dir = path.dirname(filePath);
  const basename = path.basename(filePath);

  const { projectType, projectLanguageType } = options;

  let ruleKey = '';
  let eslintRuleKey = '';
  let customConfig: any;

    // 'unknown' | 'rax' | 'react' | 'vue';
  if (projectType === 'unknown') {
    ruleKey = 'common';
  } else {
    ruleKey = projectType;
  }

  eslintRuleKey = ruleKey;
  if (projectLanguageType === 'ts') {
    // 'ts' | 'js';
    eslintRuleKey += '-ts';
  }

  if (basename === 'package.json') {
    const packageJSON = JSON.parse(source);
    const { scripts = {}, devDependencies = {} } = packageJSON;

    // if @applint/spec not exists, then run.
    if (!devDependencies['@applint/spec']) {
      Object.assign(scripts, SCRIPT_TEMPLATE);
      devDependencies['@applint/spec'] = '^0.1.0-beta.0';

      Object.keys(LIB_CONFIGS).forEach((key) => {
        const libConfig = LIB_CONFIGS[key];
        const { processPackageJson, processOriginalConfig, generateFiles } = libConfig;

        // 1. process package.json
        if (processPackageJson) {
          devDependencies[key] = processPackageJson.recommendedVersion;
          if (processPackageJson.removePackagesReg) {
            Object.keys(devDependencies).forEach((k) => {
              if (processPackageJson.removePackagesReg.test(k)) {
                delete devDependencies[k];
              }
            });
          }
        }

        // 2. process original config
        if (processOriginalConfig) {
          let originalConfig: any;
          // Only process js and json config file
          const jsConfigFile = path.join(dir, `${processOriginalConfig.configFileName}.js`);
          const jsonConfigFile = path.join(dir, `${processOriginalConfig.configFileName}.json`);

          if (fs.existsSync(jsConfigFile)) {
            const source = fs.readFileSync(jsConfigFile, 'utf-8');
            // Only find fist level object
            let isFirstLevelObject = true;
            j(source).find(j.ObjectExpression).forEach((p) => {
              if (!isFirstLevelObject) return;
              // @ts-ignore
              const { start, end } = p.node;
              // eslint-disable-next-line
              originalConfig = eval(`(${source.substring(start, end)})`);
              isFirstLevelObject = false;
            });
          } else if (fs.existsSync(jsonConfigFile)) {
            const source = fs.readFileSync(jsConfigFile, 'utf-8');
            originalConfig = JSON.parse(source);
          }

          // Set new custom config
          if (originalConfig) {
            processOriginalConfig.removeConfigKeys.forEach((k: string) => {
              delete originalConfig[k];
            });
            customConfig = originalConfig;
          }
        }

        // 3. generate files
        if (options.dry !== true && generateFiles) {
          fs.writeFileSync(path.join(dir, generateFiles.ignoreFile), IGNORE_FILE_TEMPLATE, 'utf8');
          fs.writeFileSync(path.join(dir, generateFiles.configFile), ejs.render(generateFiles.configFileTemplate, { ruleKey, eslintRuleKey, customConfig }), 'utf8');
        }
      });
      return JSON.stringify(packageJSON, null, 2);
    }
    return null;
  }
  return null;
}