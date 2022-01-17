import path from 'path';
import requireAll from 'require-all';
import deepmerge from 'deepmerge';
import type { Linter } from 'eslint';
import type { UserConfig as CommitlintUserConfig } from '@commitlint/types';
import type { Config as StylelintConfig } from 'stylelint';
import type { Options as PrettierConfig } from 'prettier';

type RuleKey = 'common' | 'common-ts' | 'react' | 'react-ts' | 'rax' | 'rax-ts';

// ESLint
const eslint = requireAll({
  dirname: path.resolve(__dirname, 'eslint'),
});
export function getESLintConfig(rule: RuleKey, userConfig: Linter.Config = {}) {
  if (!eslint[rule]) {
    throw new Error(`Rule '${rule}' not Support!`);
  }
  return deepmerge(eslint[rule].default, userConfig);
}

// commitlint
const commitlint = requireAll({
  dirname: path.resolve(__dirname, 'commitlint'),
});
// Note: rule param is to compatible with @iceworks/spec
export function getCommitlintConfig(rule: RuleKey, userConfig: CommitlintUserConfig = {}) {
  return deepmerge(commitlint.index.default, userConfig);
}

// prettier
const prettier = requireAll({
  dirname: path.resolve(__dirname, 'prettier'),
});
// Note: rule param is to compatible with @iceworks/spec
export function getPrettierConfig(rule: RuleKey, userConfig: PrettierConfig = {}) {
  return deepmerge(prettier.index.default, userConfig);
}

// stylelint
const stylelint = requireAll({
  dirname: path.resolve(__dirname, 'stylelint'),
});
// Note: rule param is to compatible with @iceworks/spec
export function getStylelintConfig(rule: RuleKey, userConfig: StylelintConfig = {}) {
  return deepmerge(stylelint.index.default, userConfig);
}
