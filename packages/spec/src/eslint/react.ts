import type { Linter } from 'eslint';

const reactESLintConfig: Linter.Config = {
  extends: [
    '@applint/eslint-config/react',
  ],
};

export default reactESLintConfig;
