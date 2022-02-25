import stylelint from 'stylelint';
import path from 'path';
import type { RuleKey } from '@applint/spec';
import { getStylelintConfig } from '@applint/spec';
import Linter from './Linter';
import type { Config as StylelintConfig, LinterOptions, LinterResult } from 'stylelint';
import type { LinterParams } from './types';

const configFilename = '.stylelintrc.js';
const ignoreFilename = '.stylelintignore';
const apiName = 'getStylelintConfig';
const supportiveFileRegExp = /(\.css|\.less|\.scss|\.sass)$/;

export class Stylelint extends Linter<LinterResult> {
  private config: StylelintConfig;
  private defaultOptions: LinterOptions;

  public constructor(params: LinterParams) {
    super(params);
    this.ruleKey = (this.getRuleKeyInConfigFile(configFilename, apiName) || this.ruleKey) as RuleKey;
    this.config = getStylelintConfig(this.ruleKey);
    this.defaultOptions = {
      cache: false,
      files: this.getTargetFiles(ignoreFilename, supportiveFileRegExp),
      cwd: this.directory,
      config: this.config,
      configBasedir: path.dirname(require.resolve('@applint/spec')),
    };
  }

  public async scan() {
    const result = await stylelint.lint(this.defaultOptions);

    return {
      data: result,
    };
  }

  public async fix() {
    const result = await stylelint.lint({
      ...this.defaultOptions,
      fix: true,
    });

    return {
      data: result,
    };
  }
}
