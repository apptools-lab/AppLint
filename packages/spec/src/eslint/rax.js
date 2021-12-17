const getRaxESlintConfig = require('../getRaxESlintConfig');

module.exports = getRaxESlintConfig({
  extends: [
    require.resolve('@applint/eslint-config/rax'),
  ],
});
