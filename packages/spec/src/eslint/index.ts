import commonESLintConfig from './common';
import commonTypeScriptESLintConfig from './common-ts';
import commonTypeScriptESLintStrictConfig from './common-ts-strict';
import raxESLintConfig from './rax';
import raxTypeScriptESLintConfig from './rax-ts';
import raxTypeScriptESLintStrictConfig from './rax-ts-strict';
import reactESLintConfig from './react';
import reactTypeScriptESLintConfig from './react-ts';
import reactTypeScriptESLintStrictConfig from './react-ts-strict';
import vueESLintConfig from './vue';
import vueTypeScriptESLintConfig from './vue-ts';

export default {
  common: commonESLintConfig,
  'common-ts': commonTypeScriptESLintConfig,
  'common-ts-strict': commonTypeScriptESLintStrictConfig,
  rax: raxESLintConfig,
  'rax-ts': raxTypeScriptESLintConfig,
  'rax-ts-strict': raxTypeScriptESLintStrictConfig,
  react: reactESLintConfig,
  'react-ts': reactTypeScriptESLintConfig,
  'react-ts-strict': reactTypeScriptESLintStrictConfig,
  vue: vueESLintConfig,
  'vue-ts': vueTypeScriptESLintConfig,
};
