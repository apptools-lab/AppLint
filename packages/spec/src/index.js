const path = require('path');
const requireAll = require('require-all');
const deepmerge = require('deepmerge')

const eslint = requireAll({
  dirname: path.resolve(__dirname, 'eslint'),
})

function getConfig(configs, rule, userConfig) {
  if (!configs[rule]) {
    throw new Error(`Rule '${rule}' not Support!`);
  }

  return deepmerge(configs[rule], userConfig || {});
}

// ESLint
exports.getESLintConfig = function (rule, userConfig) {
  return getConfig(eslint, rule, userConfig);
};