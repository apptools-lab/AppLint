module.exports = {
  extends: [
    './rules/javascript',
  ].map(require.resolve),

  parser: 'babel-eslint',
  // envs: ['nodejs'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
      jsx: true,
    },
  },
  root: true,
};