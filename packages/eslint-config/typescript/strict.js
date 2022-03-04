module.exports = {
  extends: [
    './index',
    '../rules/typescript-strict',
  ].map(require.resolve),
};
