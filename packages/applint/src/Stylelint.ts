import stylelint from 'stylelint';
import { getStylelintConfig } from '@applint/spec';
import deepmerge from 'deepmerge';
import Linter from './Linter';
import type { Config as StylelintConfig, LinterOptions, LinterResult } from 'stylelint';
import type { LinterParams } from './types';

const configFilename = '.stylelintrc.js';
const ignoreFilename = '.stylelintignore';
const apiName = 'getStylelintConfig';
const supportiveFileRegExp = /(\.css|\.less|\.scss|\.sass)$/;

export class Stylelint extends Linter<StylelintConfig, LinterResult> {
  private config: StylelintConfig;
  private customConfig: StylelintConfig;
  private defaultOptions: LinterOptions;

  public constructor(params: LinterParams) {
    super(params);

    const defaultConfig = getStylelintConfig(this.ruleKey);
    const customConfig = this.getCustomConfig(configFilename, apiName);
    this.customConfig = customConfig;
    // TODO: in AppLint CI, only check defaultConfig
    this.config = deepmerge(defaultConfig, customConfig);

    this.defaultOptions = {
      cache: false,
      files: this.getTargetFiles(ignoreFilename, supportiveFileRegExp),
      cwd: this.directory,
      config: this.config,
    };
  }

  public async scan() {
    const result = await stylelint.lint(this.defaultOptions);

    return {
      data: result,
      customConfig: this.customConfig,
    };
  }

  public async fix() {
    const result = await stylelint.lint({
      ...this.defaultOptions,
      fix: true,
    });

    return {
      data: result,
      customConfig: this.customConfig,
    };
  }
}
