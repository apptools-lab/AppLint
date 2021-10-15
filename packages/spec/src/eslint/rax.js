const getRaxEslintConfig = require('../getRaxEslintConfig');

module.exports = getRaxEslintConfig({
  extends: [
    require.resolve('eslint-config-applint/rax'),
  ],
});
