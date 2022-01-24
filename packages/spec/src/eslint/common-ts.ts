import type { Linter } from 'eslint';

const commonTypeScriptESLintConfig: Linter.Config = {
  extends: ['@applint/eslint-config/typescript'],
};

export default commonTypeScriptESLintConfig;
