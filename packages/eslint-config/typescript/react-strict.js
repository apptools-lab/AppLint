module.exports = {
  extends: [
    './react',
    '../rules/typescript-strict',
  ].map(require.resolve),
};
