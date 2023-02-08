module.exports = {
  extends: [
    './react',
    '../rules/typescript-strict',
    '../rules/prettier',
  ].map(require.resolve),
};
