import { ESLint as ESLintBase } from 'eslint';
import fse from 'fs-extra';
import getCustomESLintConfig from './getCustomESLintConfig';
import deepmerge from 'deepmerge';
import path from 'path';
import ignore from 'ignore';
import type LinterImpl from '../LinterImpl';

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

export class ESLint implements LinterImpl {
  private customConfig: Record<string, any>;

  private targetFiles: string[];

  private ruleKey: string;

  private directory: string;

  public constructor({ directory, ruleKey, files }: Params) {
    const customConfig = getCustomESLintConfig(directory, ruleKey) || {};
    const targetFiles = this.getTargetFiles(files, directory);

    this.ruleKey = ruleKey;
    this.customConfig = customConfig;
    this.targetFiles = targetFiles;
    this.directory = directory;
  }

  private initESLintInstance(fix: boolean) {
    const eslint = new ESLintBase({
      cache: false,
      // If user add extends or plugins, should find plugin form target directory
      resolvePluginsRelativeTo:
        this.customConfig.extends || this.customConfig.plugins
          ? this.directory
          : path.dirname(require.resolve('@applint/spec')),
      baseConfig: deepmerge(getESLintConfig(this.ruleKey), this.customConfig),
      cwd: this.directory,
      fix,
      useEslintrc: false,
    });

    return eslint;
  }

  public async scan() {
    const eslint = this.initESLintInstance(false);
    const data = await eslint.lintFiles(this.targetFiles);

    return {
      data,
      customConfig: this.customConfig,
    };
  }

  public async fix(onlyError = true) {
    const eslint = this.initESLintInstance(true);
    let data = await eslint.lintFiles(this.targetFiles);
    if (onlyError) {
      // 移除 warning 的 lint 信息，只保留 error，这样就能只修复 error 的代码
      data = ESLintBase.getErrorResults(data);
    }
    await ESLintBase.outputFixes(data);

    return {
      data,
      customConfig: this.customConfig,
    };
  }

  private getTargetFiles(files: FileInfo[], directory: string) {
    const ig = this.getIg(directory);

    const targetFiles: string[] = files
      .filter((file: FileInfo) => {
        return (
          SUPPORT_FILE_REG.test(file.path) &&
          !ig.ignores(file.path.replace(path.join(directory, '/'), ''))
        );
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