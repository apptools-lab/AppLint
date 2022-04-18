# @applint/spec

在 ICE、Rax、React 项目中更简单接入 ESLint(支持 TypeScript) / Stylelint / Prettier / Commitlint 规则，规则与阿里巴巴大淘宝前端规范保持一致。

## 安装

```bash
npm i --save-dev @applint/spec eslint stylelint prettier @commitlint/cli husky
```

> 注意: 你不需要安装任何其他 Lint 插件或者插件集，@applint/spec 中已包含这部分依赖。

## 使用

### ESLint

在项目根目录下创建 `.eslintrc.js` 文件，并加入以下配置：

```js
// .eslintrc.js
const { getESLintConfig } = require('@applint/spec');

// getESLintConfig(rule: 'common' | 'common-ts' | 'rax' | 'rax-ts' | 'react' | 'react-ts' | 'vue' | 'vue-ts', customConfig?: Linter.Config);
module.exports = getESLintConfig('react', {
  // 自定义配置
  // rules: { 'no-console': 0 }
});
```

ESLint 规则基于 [@applint/eslint-config](https://www.npmjs.com/package/@applint/eslint-config)。

然后在 `package.json` 中加入脚本：

```diff
{
  "scripts": {
+   "eslint": "eslint --ext .js,.jsx,.ts,.tsx ./",
+   "eslint:fix": "npm run eslint -- --fix"
  }
}
```

在终端运行 `npm run eslint` 查看项目有哪些 Lint 问题；运行 `npm run eslint:fix` 会让 ESLint 尝试修复能被自动修复的问题。

#### 更严格的 TypeScript 配置

如果你希望对项目中的 TypeScript 代码进行更严格的约束，可以使用 'rax-ts-strict' | 'react-ts-strict' | 'common-ts-strict' （依据你的具体场景）。

```js
// .eslintrc.js
const { getESLintConfig } = require('@applint/spec');

// getESLintConfig(rule: 'common-ts-strict' | 'rax-ts-strict' | 'react-ts-strict', customConfig?: Linter.Config);
module.exports = getESLintConfig('react-ts-strict', {
  // 自定义配置
  // rules: { 'no-console': 0 }
});
```

注意：

- 严格配置的侧重点在于 TypeScript 类型的书写，包括：一致性（如类型断言只允许使用 as、对象的类型声明只允许使用接口等），显性（函数的返回值类型、类成员的可访问性等需要显式注明），语法（使用可选链`?.`替代逻辑与`&&`，使用空值合并`??`替代逻辑或`||`等），TS 专有能力（使用 import type 导入类型等）。
- 使用严格配置并不意味着放弃基础配置，严格配置同样包含了基础的 ESLint 规则。
- 开启前，请请确保你能够接受这一程度的强约束。

### Stylelint

在项目根目录下创建 `.stylelintrc.js`，并加入以下配置：

```js
// .stylelintrc.js
const { getStylelintConfig } = require('@applint/spec');

// getStylelintConfig(rule: 'common' | 'rax' | 'react' | 'vue',  customConfig?: StylelintConfig);
module.exports = getStylelintConfig('react');
```

Stylelint 规则基于 [@applint/stylelint-config](https://www.npmjs.com/package/@applint/stylelint-config)。

然后在 `package.json` 中加入脚本：

```diff
{
  "scripts": {
+   "stylelint": "stylelint \"**/*.{css,scss,less}\"",
+   "stylelint:fix": "npm run stylelint -- --fix"
  }
}
```

在终端运行 `npm run stylelint` 查看项目有哪些 Lint 问题；运行 `npm run stylelint:fix` 会让 Stylelint 尝试修复能被自动修复的问题。

### Prettier

在项目根目录下创建 `.prettierrc.js`，并加入以下配置：

```js
// .prettierrc.js
const { getPrettierConfig } = require('@applint/spec');

// getPrettierConfig(rule: 'common' | 'rax' | 'react' | 'vue', customConfig?: PrettierConfig);
module.exports = getPrettierConfig('react');
```

规则基于 [@applint/prettier-config](https://github.com/apptools-lab/AppLint/tree/main/packages/spec/src/prettier)。

然后在 `package.json` 中加入脚本：

```diff
{
  "scripts": {
+   "prettier": "prettier **/* --write"
  }
}
```

运行 `npm run prettier` 会使用 Prettier 对代码进行格式化。

### Commitlint

在项目根目录下创建 `.commitlintrc.js`，并加入以下配置：

```js
// .commitlintrc.js
const { getCommitlintConfig } = require('@applint/spec');

// getCommitlintConfig(rule: 'common' | 'rax' | 'react' | 'vue', customConfig?: CommitlintUserConfig);
module.exports = getCommitlintConfig('react');
```

Commitlint 规则基于 [@applint/commitlint-config](https://github.com/apptools-lab/AppLint/tree/main/packages/commitlint-config)。

#### Git Hooks

推荐查看 [husky 文档](https://www.npmjs.com/package/husky)了解如何创建 "`commit-msg`" 和 "`pre-commit`" 文档。
