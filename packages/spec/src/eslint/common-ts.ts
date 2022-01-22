import type { Linter } from 'eslint';

const commonESLintTSConfig: Linter.Config = {
  extends: ['@applint/eslint-config/typescript'],
};

export default commonESLintTSConfig;
