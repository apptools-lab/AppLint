import { ESLint as ESLintBase } from 'eslint';
import type { Linter as ESLinter } from 'eslint';
import fse from 'fs-extra';
import { getESLintConfig } from '@applint/spec';
import deepmerge from 'deepmerge';
import path from 'path';
import Linter from './Linter';
import type { LinterParams } from './types';

const configFilename = '.eslintrc.js';
const ignoreFilename = '.eslintignore';
const apiName = 'getESLintConfig';
const supportiveFileRegExp = /(\.js|\.jsx|\.ts|\.tsx|\.vue)$/;

export class ESLint extends Linter<ESLinter.Config, ESLintBase.LintResult[]> {
  private config: ESLinter.Config;
  private customConfig: ESLinter.Config;
  private targetFiles: string[];

  public constructor(params: LinterParams) {
    super(params);

    const defaultConfig = getESLintConfig(this.ruleKey);
    let customConfig = this.getCustomConfig(configFilename, apiName);
    customConfig = this.addParserOptionsToCustomConfig(customConfig);
    this.customConfig = customConfig;
    // TODO: in AppLint CI, only check defaultConfig
    this.config = deepmerge(defaultConfig, customConfig);

    this.targetFiles = this.getTargetFiles(ignoreFilename, supportiveFileRegExp);
  }

  public async scan() {
    const eslint = this.initESLintInstance(false);
    const data = await eslint.lintFiles(this.targetFiles);
    return {
      data,
      customConfig: this.customConfig,
    };
  }

  public async fix() {
    const eslint = this.initESLintInstance(true);
    const data = await eslint.lintFiles(this.targetFiles);
    await ESLintBase.outputFixes(data);
    return {
      data,
      customConfig: this.customConfig,
    };
  }

  private initESLintInstance(fix: boolean) {
    const eslint = new ESLintBase({
      cache: false,
      // If user add extends or plugins, should find plugin form target directory
      resolvePluginsRelativeTo:
        this.customConfig.extends || this.customConfig.plugins
          ? this.directory
          : path.dirname(require.resolve('@applint/spec')),
      baseConfig: this.config,
      cwd: this.directory,
      fix,
      useEslintrc: false,
    });

    return eslint;
  }

  private addParserOptionsToCustomConfig(customConfig: ESLinter.Config) {
    if (this.ruleKey.indexOf('ts') !== -1) {
      if (!customConfig.parserOptions) {
        customConfig.parserOptions = {};
      }
      if (fse.existsSync(path.join(this.directory, './tsconfig.json'))) {
        customConfig.parserOptions.project = path.join(this.directory, './tsconfig.json');
      }
    }

    return customConfig;
  }
}
