import { Rule, Severity } from './types';

export const rules: Record<string, Rule> = {
  'plugin-rax-component-to-component': {
    title: 'Rax 组件工程升级',
    'title_en': 'Rax component project upgrade',
    message: '从 plugin-rax-component 升级到 plugin-component',
    'message_en': 'upgrade from plugin-rax-component to plugin-component',
    severity: Severity.warn,
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
    severity: Severity.off,
    'npm_deprecate': '@ice/spec'
  },
  'lint-config-to-applint-spec': {
    title: '遵循阿里巴巴淘系前端规范，并接入 @applint/spec 的最佳实践',
    'title_en': 'Follow Alibaba Tao Tech FED lint rules, and use @applint/spec best practices',
    message: '遵循阿里巴巴淘系前端规范，并更新 rax, ice 和 react 项目中的 eslint / stylelint / prettier 配置。',
    'message_en': 'Follow Alibaba Tao Tech FED lint rules, and update eslint / stylelint / prettier in rax, ice and react project.',
    severity: Severity.off,
    'npm_deprecate': '@iceworks/spec'
  },
  'rax-app': {
    title: 'Rax 工程升级',
    'title_en': 'Rax project upgrade',
    message: 'rax-app 从 2.x 升级到 3.x',
    'message_en': 'rax-app upgrade from 2.x to 3.x',
    severity: Severity.warn,
    docs: 'https://github.com/raxjs/rax-app/blob/master/packages/codemod/README.md',
    package: 'rax-codemod',
    transform: 'lib/transforms/app/app.json.js'
  },
  'picture': {
    title: '指定图片宽度',
    'title_en': 'Specify image width',
    message: '使用 Picture 组件时，通过 Style 属性显示指定图片宽度，可以在运行时加载合适尺寸的图片，从而有效减少图片加载体积',
    'message_en': 'When using the Picture component, you can load images of the appropriate size at run time by displaying the specified image width through the Style property, which effectively reduces the image loading volume',
    severity: Severity.recommendation,
    docs: 'https://web.npm.alibaba-inc.com/package/@ali/perf-codemod',
    package: '@ali/perf-codemod',
    transform: 'src/transforms/picture.js'
  },
  'snapshot': {
    title: '开启快照',
    'title_en': 'Enable snapshot',
    message: '开启快照（snapshot），可以有效提升页面的首屏可见时间。[详情](https://rax.alibaba-inc.com/docs/guide/snapshot)',
    'message_en': 'Enabling the snapshot function improves the first screen view time.[Detail](https://rax.alibaba-inc.com/docs/guide/snapshot).',
    severity: Severity.recommendation,
    docs: 'https://web.npm.alibaba-inc.com/package/@ali/perf-codemod',
    package: '@ali/perf-codemod',
    transform: 'src/transforms/snapshot.js'
  }
}

export function getRules() {
  return rules;
}