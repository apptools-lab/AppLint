const fs = require('fs');
const path = require('path');
const JSON5 = require('json5');
const deepmerge = require('deepmerge');

// Add specific rules for rax compile-time miniapp
module.exports = function (config) {
  try {
    const buildConfigFilePath = path.join(process.cwd(), 'build.json');

    if (fs.existsSync(buildConfigFilePath)) {

      const buildConfig = JSON5.parse(fs.readFileSync(buildConfigFilePath, 'utf8'));

      const isCompileTime = (target) => (
        buildConfig.targets && buildConfig.targets.find((t) => t === target) &&
        buildConfig[target] && buildConfig[target].buildType === 'compile'
      );

      // At present, only miniapp and wechat-miniprogram support build for compile-time
      if (isCompileTime('miniapp') || isCompileTime('wechat-miniprogram')) {
        // https://www.npmjs.com/package/eslint-plugin-rax-compile-time-miniapp
        const { configs } = require('eslint-plugin-rax-compile-time-miniapp');

        config.plugins = config.plugins || [];

        config.plugins.push('rax-compile-time-miniapp');
        // For some ci and jest test env, we chose set config instead 'plugin:rax-compile-time-miniapp/recommended'
        config.rules = deepmerge(config.rules || {}, configs.recommended.rules);
      }
    }
  } catch (e) {
    console.log('Add specific rules for rax compile-time miniapp failed!', e);
  }
  return config;
};
