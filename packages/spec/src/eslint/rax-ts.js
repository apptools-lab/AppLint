const getRaxEslintConfig = require('../getRaxEslintConfig');

module.exports = getRaxEslintConfig({
  extends: [
    require.resolve('@applint/eslint-config/typescript/rax'),
  ],
});
