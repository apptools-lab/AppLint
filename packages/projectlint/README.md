# @applint/projectlint

提供项目级别检测和修复 Node API，目前包括 Codemod 检查和修复、项目依赖检查（冗余包和风险包）、项目 bundle 体积大小检查，对齐 [@applint/applint](https://www.npmjs.com/package/@applint/applint) 功能。

## 安装

```bash
npm i @applint/projectlint --save-dev
```

## 特性

### Codemod

#### API

##### runTransforms

选项：

- cwd: `string`, 运行 Codemod 的项目根路径
- dry: `boolean`, 是否进行 Codemod dry-run，默认值是 `true`
- jscodeshiftArgs: `string[]`, jscodeshift 配置，默认值是 `[]`

返回值：

result: `TransformResult[]`

```typescript
interface TransformResult {
  // 规则名称
  transform: string;
  title: string;
  title_en: string;
  message: string;
  message_en: string;
  // 0: off 1: warn 2: error
  severity: number;
  tags: string[];
  dry: boolean;
  docs: string;
  output: string;
  npm_deprecate?: string;
}
```

例子：

```js
import { runTransforms } from '@applint/projectlint';

const cwd = '/workspace/demo';

const transforms = {
  'plugin-rax-component-to-component': 'error',
  'lint-config-to-iceworks-spec': 'warn',
};

const result = runTransforms(cwd, transforms, false);
console.log('run transforms result', result);
```

#### Codemod 列表

### 1. `plugin-rax-component-to-component`

更新 `build-plugin-rax-component` 到 `build-plugin-component`。[文档](./transforms/docs/plugin-rax-component-to-component.md)

### 2. `lint-config-to-iceworks-spec`

遵循阿里巴巴前端规范并使用 `@iceworks/spec` 最佳实践。[文档](./transforms/docs/lint-config-to-iceworks-spec.md)

### 3. `lint-config-to-applint-spec`

遵循阿里巴巴淘系前端规范并使用 `@applint/spec` 最佳实践。[文档](./transforms/docs/lint-config-to-applint-spec.md)
