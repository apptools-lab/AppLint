import commonESLintConfig from './common';
import commonTypeScriptESLintConfig from './common-ts';
import raxESLintConfig from './rax';
import raxTypeScriptESLintConfig from './rax-ts';
import reactESLintConfig from './react';
import reactTypeScriptESLintConfig from './react-ts';
import vueESLintConfig from './vue';
import vueTypeScriptESLintConfig from './vue-ts';

export default {
  common: commonESLintConfig,
  'common-ts': commonTypeScriptESLintConfig,
  rax: raxESLintConfig,
  'rax-ts': raxTypeScriptESLintConfig,
  react: reactESLintConfig,
  'react-ts': reactTypeScriptESLintConfig,
  vue: vueESLintConfig,
  'vue-ts': vueTypeScriptESLintConfig,
};
