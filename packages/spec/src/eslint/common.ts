import type { Linter } from 'eslint';

const commonESLintConfig: Linter.Config = {
  extends: [
    '@applint/eslint-config',
  ],
};

export default commonESLintConfig;
