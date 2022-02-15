import type { Linter } from 'eslint';

const commonTypeScriptESLintConfig: Linter.Config = {
  extends: [
    // if not use require.resolve(), the @applint/eslint-config can't be find in @appworks/doctor(call with Node API)
    require.resolve('@applint/eslint-config/typescript'),
  ],
};

export default commonTypeScriptESLintConfig;
