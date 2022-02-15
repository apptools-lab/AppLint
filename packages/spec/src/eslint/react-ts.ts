import type { Linter } from 'eslint';

const reactTypeScriptESLintConfig: Linter.Config = {
  extends: [
    // if not use require.resolve(), the @applint/eslint-config can't be find in @appworks/doctor(call with Node API)
    require.resolve('@applint/eslint-config/typescript/react'),
  ],
};

export default reactTypeScriptESLintConfig;
