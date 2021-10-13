import { getProjectFramework, getProjectLanguageType, getProjectType } from '@appworks/project-utils';
import glob from 'glob';
import path from 'path';
import execa from 'execa';
import allRules from './rules';

const jscodeshiftExecutable = require.resolve('jscodeshift/bin/jscodeshift');

export default async function runTransforms({ cwd, rules, mode, jscodeshiftArgs = [] }: Params) {
  const files = getFiles(cwd);
  const transformOptions  = await getTransformOptions(cwd);
  const allRuleKeys = Object.keys(allRules);
  let args = mode === 'check' ? ['--dry'] : [];
  args = args.concat(files);
  args = args.concat(jscodeshiftArgs);
  args = args.concat(transformOptions);

  const workers = Object.entries(rules).map(([ruleName, severity]) => {
    return new Promise((resolve) => {
      if (!(ruleName in allRuleKeys)) {
        // if user set transform isn't in our config
        return;
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
          mode === 'fix' ||
          // check mode return can run codemods to fix project
          // when jscodeshift running ok and show changed count
          (/ok\n/.test(output) && !/\n0 ok\n/.test(output))
        ) {
          resolve({
            transform: ruleName,
            docs: `https://github.com/apptools-lab/codemod/tree/master/transforms/docs/${ruleName}.md`,
            mode,
            ...transformConfig,
            output,
          });
        }
        resolve(null);
      });
    })
  })

  const results = await Promise.all(workers);
  return results.filter((result) => result);
}

function getFiles(cwd: string) {
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
interface TransformConfig extends Rule {
  severity: string
}

function getTransformFile(key: string, transformConfig: TransformConfig) {
  let transformFile = '';
  if (transformConfig.package && transformConfig.transform) {
    const packageDir = path.dirname(require.resolve(`${transformConfig.package}/package.json`));
    transformFile = path.join(packageDir, transformConfig.transform);
  } else {
    transformFile = require.resolve(path.join(__dirname, './transforms/', `${key}.js`));
  }
  return transformFile;
}


async function getTransformOptions(cwd: string) {
  const transformOptions = [
    `--projectType=${await getProjectType(cwd, true)}`,
    `--projectFramework=${await getProjectFramework(cwd)}`,
    `--projectLanguageType=${await getProjectLanguageType(cwd)}`,
  ]; 

  return transformOptions;
}