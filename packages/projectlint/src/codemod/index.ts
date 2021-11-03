import { getProjectFramework, getProjectLanguageType, getProjectType } from '@appworks/project-utils';
import glob from 'glob';
import path from 'path';
import execa from 'execa';
import allRules from './rules';
import { Rule, RunTransformParams } from './types';

const jscodeshiftExecutable = require.resolve('jscodeshift/bin/jscodeshift');

export async function runTransforms({ cwd, transforms, dry = true, jscodeshiftArgs = [] }: RunTransformParams) {
  const files = getFiles(cwd);

  const defaultTransformOptions = await getDefaultTransformOptions(cwd);
 
  let args = dry ? ['--dry'] : [];
  args = args.concat(files);
  args = args.concat(jscodeshiftArgs);
  args = args.concat(defaultTransformOptions);
  args = args.concat('--parser=tsx'); // --parser=babel|babylon|flow|ts|tsx
  args = args.concat('--extensions=tsx,ts,jsx,js,json');

  const results = await runTransformsByWorkers({ transforms, args, dry });
  return results.filter((result) => result);
}

async function runTransformsByWorkers({ transforms, args, dry }: Pick<RunTransformParams, 'dry' | 'transforms'> & { args: string[] }) {
  const allRuleKeys = Object.keys(allRules);

  const workers = Object.entries(transforms).map(([ruleName, severity]) => {
    return new Promise((resolve) => {
      if (!allRuleKeys.includes(ruleName)) {
        // if user set transform isn't in our config
        resolve(null);
      }
      const transformConfig = {
        ...allRules[ruleName],
        severity,
      };
      const transformFile = getTransformFile(ruleName, transformConfig);
      args = args.concat(['--transform', transformFile]);

      let output = '';

      const childProcess = execa(jscodeshiftExecutable, args);

      if (childProcess.stdout) {
        childProcess.stdout.pipe(process.stdout);
        childProcess.stdout.on('data', (data) => {
          output += data.toString();
        });
      }

      childProcess.on('exit', () => {
        // Remove all colors/styles from strings https://stackoverflow.com/questions/25245716/remove-all-ansi-colors-styles-from-strings
        output = output.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, '');

        if (
          !dry ||
          // check mode return can run codemods to fix project
          // when jscodeshift running ok and show changed count
          (/ok\n/.test(output) && !/\n0 ok\n/.test(output))
        ) {
          resolve({
            transform: ruleName,
            docs: `https://github.com/apptools-lab/applint/tree/main/transforms/docs/${ruleName}.md`,
            dry,
            ...transformConfig,
            output,
          });
        }
        resolve(null);
      });
    })
  })

  const results = await Promise.all(workers);

  return results;
}

function getFiles(cwd: string) {
  // TODO: get the .gitignore file to exclude more file
  const files = glob.sync(
    '**/*', 
    { 
      cwd, 
      ignore: ['**/node_modules/**'], 
      nodir: true, 
      realpath: true 
    }
  );
  return files;
}

function getTransformFile(key: string, transformConfig: Rule & { severity: string }) {
  let transformFile = '';
  if (transformConfig.package && transformConfig.transform) {
    const packageDir = path.dirname(require.resolve(`${transformConfig.package}/package.json`));
    transformFile = path.join(packageDir, transformConfig.transform);
  } else {
    transformFile = require.resolve(path.join(__dirname, './transforms/', key));
  }
  return transformFile;
}

async function getDefaultTransformOptions(cwd: string) {
  const transformOptions = [
    `--projectType=${await getProjectType(cwd, true)}`,
    `--projectFramework=${await getProjectFramework(cwd)}`,
    `--projectLanguageType=${await getProjectLanguageType(cwd)}`,
  ]; 

  return transformOptions;
}