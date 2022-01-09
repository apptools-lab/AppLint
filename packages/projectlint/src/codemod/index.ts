import { getProjectFramework, getProjectLanguageType, getProjectType } from '@appworks/project-utils';
import glob from 'glob';
import path from 'path';
import execa from 'execa';
import fs from 'fs';
import { rules } from './rules';
import { CodemodRule, CodemodTransformParams, CodemodTransformResult, CodemodSeverity } from './types';
import ProjectLinterImpl from '../ProjectLinterImpl';

export * from './types';

const jscodeshiftExecutable = require.resolve('jscodeshift/bin/jscodeshift');

type Transforms = Record<string, number>;

class Codemod implements ProjectLinterImpl {
  cwd: string;

  transforms: Transforms;

  transformRules: Record<string, CodemodRule>;

  jscodeshiftArgs?: string[];

  args: any[];

  constructor({ cwd, transforms, jscodeshiftArgs = [], customTransformRules = {} }: CodemodTransformParams) {
    this.transformRules = { ...rules, ...customTransformRules };
    this.cwd = cwd;
    this.jscodeshiftArgs = jscodeshiftArgs;
    this.transforms = transforms || this.getAllCodemodTransforms();
    const files = this.getFiles(cwd);
    // init jscodeshift args
    this.args = [...files, ...jscodeshiftArgs, '--parser=tsx', '--extensions=tsx,ts,jsx,js,json', '--cpus=7'];
  }

  async scan() {
    const defaultTransformOptions = await this.getDefaultTransformOptions(this.cwd);
    const args = [...this.args, '--dry', ...defaultTransformOptions];
    return await this.runTransformsByWorkers({ transforms: this.transforms, args, dry: false });
  }

  async fix() {
    const defaultTransformOptions = await this.getDefaultTransformOptions(this.cwd);
    const args = [...this.args, ...defaultTransformOptions];
    return await this.runTransformsByWorkers({ transforms: this.transforms, args, dry: true });
  }

  private getAllCodemodTransforms() {
    const codemodTransforms: Record<string, number> = {};

    Object.keys(this.transformRules).forEach((transformRule) => {
      codemodTransforms[transformRule] = this.transformRules[transformRule].severity;
    });

    return codemodTransforms;
  }

  private async runTransformsByWorkers(
    { transforms, args, dry }: Pick<CodemodTransformParams, 'transforms'> & { args: string[]; dry: boolean },
  ): Promise<CodemodTransformResult[]> {
    const ruleKeys = Object.keys(this.transformRules);
    const workers = Object.entries(transforms).map(async ([ruleName, severity]) => {
      return new Promise((resolve) => {
        if (!ruleKeys.includes(ruleName) || severity === CodemodSeverity.off) {
          // 1. if user set transform isn't in our config
          // 2. severity is 'off'
          resolve(null);
        }
        const transformConfig = {
          ...this.transformRules[ruleName],
          severity,
        };
        const transformFile = this.getTransformFile(ruleName, transformConfig);
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

          // check mode return can run codemods to fix project
          // when jscodeshift running ok and show changed count
          if (/ok\n/.test(output) && !/\n0 ok\n/.test(output)) {
            resolve({
              ...transformConfig,
              transform: ruleName,
              dry,
              output,
            });
          }
          resolve(null);
        });
      });
    });
    const results = await Promise.all(workers);

    return (results.filter((result => result))) as CodemodTransformResult[];
  }

  private getFiles(cwd: string) {
    let ignore = ['**/node_modules/**'];

    const ignoreConfigFilePath = path.join(cwd, '.eslintignore');
    if (fs.existsSync(ignoreConfigFilePath)) {
      ignore = ignore.concat(fs.readFileSync(ignoreConfigFilePath, 'utf-8').split('\n').filter(item => item));
    }

    const files = glob.sync(
      '**/*',
      {
        cwd,
        ignore,
        nodir: true,
        realpath: true,
      },
    );
    return files;
  }

  private async getDefaultTransformOptions(cwd: string) {
    const transformOptions = [
      `--projectType=${await getProjectType(cwd, true)}`,
      `--projectFramework=${await getProjectFramework(cwd)}`,
      `--projectLanguageType=${await getProjectLanguageType(cwd)}`,
    ];

    return transformOptions;
  }

  private getTransformFile(key: string, transformConfig: CodemodRule & { severity: number }) {
    let transformFile = '';
    if (transformConfig.package && transformConfig.transform) {
      const packageDir = path.dirname(require.resolve(`${transformConfig.package}/package.json`));
      transformFile = path.join(packageDir, transformConfig.transform);
    } else {
      transformFile = require.resolve(path.join(__dirname, './transforms/', key));
    }
    return transformFile;
  }
}

export default Codemod;
