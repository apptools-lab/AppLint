import { ESLint as ESLintBase } from 'eslint';
import type { Linter as ESLinter } from 'eslint';
import { getESLintConfig } from '@applint/spec';
import path from 'path';
import Linter from './Linter';
import type { RuleKey } from '@applint/spec';
import type { LinterParams } from './types';

const configFilename = '.eslintrc.js';
const ignoreFilename = '.eslintignore';
const apiName = 'getESLintConfig';
const supportiveFileRegExp = /(\.js|\.jsx|\.ts|\.tsx|\.vue)$/;

export class ESLint extends Linter<ESLintBase.LintResult[]> {
  private config: ESLinter.Config;
  private targetFiles: string[];

  public constructor(params: LinterParams) {
    super(params);
    // get rule key in `.eslintrc.js`
    this.ruleKey = (this.getRuleKeyInConfigFile(configFilename, apiName) || this.ruleKey) as RuleKey;
    this.config = getESLintConfig(this.ruleKey) as ESLinter.Config;
    // specify `parserOptions.tsconfigRootDir`
    this.config.parserOptions = this.config.parserOptions || {};
    this.config.parserOptions = { ...this.config.parserOptions, tsconfigRootDir: this.directory };
    this.targetFiles = this.getTargetFiles(ignoreFilename, supportiveFileRegExp);
  }

  public setConfig(config: ESLinter.Config) {
    this.config = config;
  }

  public getConfig() {
    return this.config;
  }

  public async scan() {
    // should not run eslint when no files were found
    if (this.targetFiles.length === 0) {
      return {
        data: [],
      };
    }
    const eslint = this.initESLintInstance(false);
    const data = await eslint.lintFiles(this.targetFiles);
    return {
      data,
    };
  }

  public async fix() {
    // should not run eslint when no files were found
    if (this.targetFiles.length === 0) {
      return {
        data: [],
      };
    }
    const eslint = this.initESLintInstance(true);
    const data = await eslint.lintFiles(this.targetFiles);
    await ESLintBase.outputFixes(data);
    return {
      data,
    };
  }

  private initESLintInstance(fix: boolean) {
    const eslint = new ESLintBase({
      cache: false,
      resolvePluginsRelativeTo: path.dirname(require.resolve('@applint/spec')),
      baseConfig: this.config,
      cwd: this.directory,
      fix,
      useEslintrc: false,
    });

    return eslint;
  }
}
