import type { Linter } from 'eslint';
import fs from 'fs';
import path from 'path';
import JSON5 from 'json5';
import deepmerge from 'deepmerge';

// Add specific rules for rax compile-time miniapp
export default function (config: Linter.Config) {
  try {
    const buildConfigFilePath = path.join(process.cwd(), 'build.json');

    if (fs.existsSync(buildConfigFilePath)) {
      const buildConfig = JSON5.parse(fs.readFileSync(buildConfigFilePath, 'utf8'));

      const isCompileTime = (target: string) => (
        buildConfig.targets && buildConfig.targets.find((buildConfigTarget: string) => buildConfigTarget === target) &&
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
  } catch (error) {
    console.log('Add specific rules for rax compile-time miniapp failed!', error);
  }
  return config;
}
