import getRaxESLintConfig from './getRaxESLintConfig';

export default getRaxESLintConfig({
  extends: [
    // if not use require.resolve(), the @applint/eslint-config can't be find in @appworks/doctor(call with Node API)
    require.resolve('@applint/eslint-config/typescript/rax-strict'),
  ],
  rules: {
    'react/self-closing-comp': 0,
  },
});
