import type { Linter } from 'eslint';

const reactESLintConfig: Linter.Config = {
  extends: [
    '@applint/eslint-config/typescript/react',
  ],
};

export default reactESLintConfig;
