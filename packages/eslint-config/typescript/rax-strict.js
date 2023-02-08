module.exports = {
  extends: [
    './rax',
    '../rules/typescript-strict',
    '../rules/prettier',
  ].map(require.resolve),
};
