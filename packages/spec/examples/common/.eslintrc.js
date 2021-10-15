const { getESLintConfig } = require('../../src');

console.log('common eslint===>', getESLintConfig('common'));
module.exports = getESLintConfig('common');
