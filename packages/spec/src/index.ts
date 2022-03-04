import deepmerge from 'deepmerge';
import eslintConfig from './eslint';
import stylelintConfig from './stylelint';
import prettierConfig from './prettier';
import commitlintConfig from './commitlint';
import type { Linter } from 'eslint';
import type { UserConfig as CommitlintUserConfig } from '@commitlint/types';
import type { Config as StylelintConfig } from 'stylelint';
import type { Options as PrettierConfig } from 'prettier';

export type RuleKey =
  | 'common'
  | 'common-ts'
  | 'common-ts-strict'
  | 'react'
  | 'react-ts'
  | 'react-ts-strict'
  | 'rax'
  | 'rax-ts'
  | 'rax-ts-strict'
  | 'vue'
  | 'vue-ts';

// ESLint
export function getESLintConfig(rule: RuleKey, userConfig: Linter.Config = {}): Linter.Config {
  return deepmerge(eslintConfig[rule] || {}, userConfig);
}

// stylelint
// Note: rule param is to compatible with @iceworks/spec
export function getStylelintConfig(
  rule: RuleKey,
  userConfig: StylelintConfig = {},
): StylelintConfig {
  return deepmerge(stylelintConfig, userConfig);
}

// commitlint
// Note: rule param is to compatible with @iceworks/spec
export function getCommitlintConfig(
  rule: RuleKey,
  userConfig: CommitlintUserConfig = {},
): CommitlintUserConfig {
  return deepmerge(commitlintConfig, userConfig);
}

// prettier
// Note: rule param is to compatible with @iceworks/spec
export function getPrettierConfig(rule: RuleKey, userConfig: PrettierConfig = {}): PrettierConfig {
  return deepmerge(prettierConfig, userConfig);
}
