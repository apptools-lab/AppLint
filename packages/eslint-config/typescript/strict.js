module.exports = {
  extends: [
    './index',
    '../rules/typescript-strict',
    '../rules/prettier',
  ].map(require.resolve),
};
