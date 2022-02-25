module.exports = {
  extends: [
    './rax',
    '../rules/typescript-strict',
  ].map(require.resolve),
};
