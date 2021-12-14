import { ESLint as ESLintBase } from 'eslint';
import fse from 'fs-extra';
import getCustomESLintConfig from './getCustomESLintConfig';
import deepmerge from 'deepmerge';
import path from 'path';
import ignore from 'ignore';
import LinterImpl from '../LinterImpl';

const { getESLintConfig } = require('@applint/spec');

interface FileInfo {
  path: string;
  source: string;
  // lines of code
  LoC: number;
}

interface Params {
  directory: string;
  ruleKey: string;
  files: FileInfo[];
}

const SUPPORT_FILE_REG = /(\.js|\.jsx|\.ts|\.tsx|\.vue)$/;

export default class ESLint implements LinterImpl {
  eslint: ESLintBase;

  customConfig: Record<string, any>;
  
  targetFiles: string[];

  constructor({ directory, ruleKey, files }: Params) {
    const customConfig = getCustomESLintConfig(directory, ruleKey) || {};
    const eslint = new ESLintBase({
      cache: false,
      // If user add extends or plugins, should find plugin form target directory
      resolvePluginsRelativeTo: customConfig.extends || customConfig.plugins ? directory : path.dirname(require.resolve('@applint/spec')),
      baseConfig: deepmerge(getESLintConfig(ruleKey), customConfig),
      cwd: directory,
      useEslintrc: false
    })
  
    const targetFiles = this.getTargetFiles(files, directory);

    this.eslint = eslint;
    this.customConfig = customConfig;
    this.targetFiles = targetFiles;
  }

  public async scan() {
    const data = await this.eslint.lintFiles(this.targetFiles);

    return {
      data,
      customConfig: this.customConfig,
    }
  }

  public async fix() {
    const { data, customConfig } = await this.scan();

    ESLintBase.outputFixes(data);

    return {
      data,
      customConfig,
    }
  }

  private getTargetFiles(files: FileInfo[], directory: string) {
    const ig = this.getIg(directory);

    const targetFiles: string[] = 
      files.filter((file: FileInfo) => {
          return SUPPORT_FILE_REG.test(file.path) && !ig.ignores(file.path.replace(path.join(directory, '/'), ''));
        })
        .map((file: FileInfo) => {
          // Use absolute path
          return file.path.startsWith('.') ? path.join(process.cwd(), file.path) : file.path;
        });

    return targetFiles;
  }

  private getIg(directory: string) {
    const ig = ignore();
    const ignoreConfigFilePath = path.join(directory, '.eslintignore');
    if (fse.existsSync(ignoreConfigFilePath)) {
      ig.add(fse.readFileSync(ignoreConfigFilePath).toString());
    }

    return ig;
  }
}