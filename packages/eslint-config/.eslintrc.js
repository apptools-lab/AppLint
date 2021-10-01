module.exports = {
  extends: [
    './src/index',
  ].map(require.resolve),
};