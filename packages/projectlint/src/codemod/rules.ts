import { Rule } from './types';

const config: Record<string, Rule> = {
  'plugin-rax-component-to-component': {
    title: 'Rax 组件工程升级',
    'title_en': 'Rax component project upgrade',
    message: '从 plugin-rax-component 升级到 plugin-component',
    'message_en': 'upgrade from plugin-rax-component to plugin-component',
    severity: 'warn',
    docs: 'https://rax.js.org/docs/guide/com-migration',
    package: 'rax-codemod',
    transform: 'lib/transforms/components/plugin-rax-component-to-component.js',
    'npm_deprecate': 'build-plugin-rax-component'
  },
  'lint-config-to-iceworks-spec': {
    title: '遵循阿里巴巴前端规范，并接入 @iceworks/spec 的最佳实践',
    'title_en': 'Follow Alibaba FED lint rules, and use @iceworks/spec best practices',
    message: '遵循阿里巴巴前端规范，并更新 rax, ice 和 react 项目中的 eslint / stylelint / prettier 配置。',
    'message_en': 'Follow Alibaba FED lint rules, and update eslint / stylelint / prettier in rax, ice and react project.',
    severity: 'off',
    'npm_deprecate': '@ice/spec'
  },
  'lint-config-to-applint-spec': {
    title: '遵循阿里巴巴淘系前端规范，并接入 @applint/spec 的最佳实践',
    'title_en': 'Follow Alibaba Tao Tech FED lint rules, and use @applint/spec best practices',
    message: '遵循阿里巴巴淘系前端规范，并更新 rax, ice 和 react 项目中的 eslint / stylelint / prettier 配置。',
    'message_en': 'Follow Alibaba Tao Tech FED lint rules, and update eslint / stylelint / prettier in rax, ice and react project.',
    severity: 'off',
    'npm_deprecate': '@iceworks/spec'
  },
  'rax-app': {
    title: 'Rax 工程升级',
    'title_en': 'Rax project upgrade',
    message: 'rax-app 从 2.x 升级到 3.x',
    'message_en': 'rax-app upgrade from 2.x to 3.x',
    severity: 'warn',
    docs: 'https://github.com/raxjs/rax-app/blob/master/packages/codemod/README.md',
    package: 'rax-codemod',
    transform: 'lib/transforms/app/app.json.js'
  },
  'picture': {
    title: 'rax-picture 性能检查',
    'title_en': 'rax-picture upgrade',
    message: 'rax-picture 性能检查',
    'message_en': 'rax-picture 性能检查',
    severity: 'warn',
    docs: '',
    package: '@ali/perf-codemod',
    transform: 'src/transforms/picture.js'
  },
  'snapshot': {
    title: 'snapshot 性能检查',
    'title_en': 'snapshot upgrade',
    message: 'snapshot 性能检查',
    'message_en': 'snapshot 性能检查',
    severity: 'warn',
    docs: '',
    package: '@ali/perf-codemod',
    transform: 'src/transforms/snapshot.js'
  }
}

export default config;
