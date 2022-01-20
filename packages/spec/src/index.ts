import path from 'path';
import requireAll from 'require-all';
import deepmerge from 'deepmerge';
import type { Linter } from 'eslint';
import type { UserConfig as CommitlintUserConfig } from '@commitlint/types';
import type { Config as StylelintConfig } from 'stylelint';
import type { Options as PrettierConfig } from 'prettier';

export type RuleKey = 'common' | 'common-ts' | 'react' | 'react-ts' | 'rax' | 'rax-ts';

// ESLint
export function getESLintConfig(rule: RuleKey, userConfig: Linter.Config = {}): Linter.Config {
  const eslint = requireAll({
    dirname: path.resolve(__dirname, 'eslint'),
  });
  return deepmerge(eslint[rule]?.default || {}, userConfig);
}

// stylelint
// Note: rule param is to compatible with @iceworks/spec
export function getStylelintConfig(rule: RuleKey, userConfig: StylelintConfig = {}): StylelintConfig {
  const stylelint = requireAll({
    dirname: path.resolve(__dirname, 'stylelint'),
  });
  return deepmerge(stylelint.index.default, userConfig);
}

// commitlint
// Note: rule param is to compatible with @iceworks/spec
export function getCommitlintConfig(rule: RuleKey, userConfig: CommitlintUserConfig = {}): CommitlintUserConfig {
  const commitlint = requireAll({
    dirname: path.resolve(__dirname, 'commitlint'),
  });
  return deepmerge(commitlint.index.default, userConfig);
}

// prettier
// Note: rule param is to compatible with @iceworks/spec
export function getPrettierConfig(rule: RuleKey, userConfig: PrettierConfig = {}): PrettierConfig {
  const prettier = requireAll({
    dirname: path.resolve(__dirname, 'prettier'),
  });
  return deepmerge(prettier.index.default, userConfig);
}
