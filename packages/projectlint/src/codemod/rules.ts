const config: Record<string, Rule> = {
  "plugin-rax-component-to-component": {
    "title": "Rax 组件工程升级",
    "title_en": "Rax component project upgrade",
    "message": "从 plugin-rax-component 升级到 plugin-component",
    "message_en": "upgrade from plugin-rax-component to plugin-component",
    "severity": "warn",
    "docs": "https://rax.js.org/docs/guide/com-migration",
    "package": "rax-codemod",
    "transform": "lib/transforms/components/plugin-rax-component-to-component.js",
    "npm_deprecate": "build-plugin-rax-component"
  },

  "lint-config-to-spec": {
    "title": "遵循阿里巴巴前端规范，并接入 @iceworks/spec 的最佳实践",
    "title_en": "Follow Alibaba FED lint rules, and use @iceworks/spec best practices",
    "message": "遵循阿里巴巴前端规范，并更新 rax, ice 和 react 项目中的 eslint / stylelint / prettier 配置。",
    "message_en": "Follow Alibaba FED lint rules, and update eslint / stylelint / prettier in rax, ice and react project.",
    "severity": "off",
    "npm_deprecate": "@ice/spec"
  }
}

export default config;
