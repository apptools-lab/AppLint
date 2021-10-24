# Lint 配置更新

为了保证代码质量，我们推荐使用 lint 相关的工具对代码进行检测，同时为了降低常规 lint 工具的使用成本，我们推荐使用 [@iceworks/spec](https://github.com/ice-lab/spec) 这个 npm 包，不但基础的 lint 规则与[阿里巴巴前端规范](https://f2e.alibaba-inc.com/specification/)保持一致，同时还加入了适合您项目的最佳实践。

更新原因：

- 享用最新的阿里巴巴前端规范和最佳实践，统一 lint 规范保证代码质量。
- 与 AppWorks 代码检测体系保持一致，保证项目稳定高效迭代。

若您的项目依赖中没有 `@iceworks/spec` 时，建议运行此 CodeMod

## 修改 package.json 依赖

1. 安装 @iceworks/spec 及 lint 相关工具库（eslint，stylelint 及 prettier）。
2. 删除 eslint 及 stylelint 原先的配置和插件。（不同版本的插件和配置会影响 lint 工具的运行，@iceworks/spec 已内置相关依赖，您无需关注）。
3. 增加 script lint 相关脚本。

```diff
{
  scripts:{
+   "eslint": "eslint --fix --ext  .js,.jsx,.ts,.tsx ./",
+   "stylelint": "stylelint "**/*.{css,scss,less}"",
+   "prettier": "prettier **/* --write",
+   "lint": "npm run eslint && npm run stylelint",
  },
  devDependencies:{
-   "eslint-plugin-import": "^2.3.30",
+   "@iceworks/spec": "^1.0.0",
+   "eslint": "^7.22.0",
+   "stylelint": "^7.22.0",
+   "prettier": "^2.1.0",
  }
}
```

## 修改 lint 配置

1. 增加 lint ignore 相关文件。
2. 保留您的 lint 配置，并更新使用 `@iceworks/spec`。

您的原先 .eslintrc.{js,json} 和 .stylelintrc.{js,json} 自定义的配置将会被保留。比如：

```diff
- const { eslint, deepmerge } = require('@ice/spec');
+ const { getESLintConfig } = require('@iceworks/spec');

- module.exports = deepmerge(eslint, {
+ module.exports = getESLintConfig('rax', {  
  rules: {
    s: 1
  },
});
```

如项目工程升级过程中遇到问题请通过 [issue](https://github.com/appworks-lab/codemod) 进行反馈。
