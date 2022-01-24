# AppLint

## 介绍

AppLint 是大淘宝前端最佳实践检查方案。通过统一代码规范、推广最佳实践以及代码质量检查和修复，提高前端项目质量和稳定性。

### 规范

基于社区流行的 Lint 工具，结合淘宝前端代码规范，制定以下的规则包：

| 规范                                                         | Lint 工具                                  | 规则包                                                       |
| :----------------------------------------------------------- | :----------------------------------------- | :----------------------------------------------------------- |
| 《JavaScript 编码规范》<br />《TypeScript 编码规范》<br />《React 编码规范》<br />《Rax 编码规范》<br /> | [ESLint](http://eslint.org/)               | [@applint/eslint-config](https://www.npmjs.com/package/@applint/eslint-config) |
| 《CSS 编码规范》                                             | [Stylelint](https://stylelint.io/)         | [@applint/stylelint-config](https://www.npmjs.com/package/@applint/stylelint-config) |
| 《Git 提交规范》                                                 | [commitlint](https://commitlint.js.org/#/) | [@applint/commitlint-config](https://www.npmjs.com/package/@applint/commitlint-config) |

为了降低 Lint 工具的使用成本，我们封装了 [@applint/spec](https://www.npmjs.com/package/@applint/spec) 这个 npm 包，方便开发者快速接入 Lint 规则到项目中。

### API

结合以上的规范，AppLint 提供 Node API，可快速对文件级别和项目级别的代码进行检查和修复：

| npm 包                                                       | 说明                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [@applint/applint](https://www.npmjs.com/package/@applint/applint) | 基于 ESLint、Stylelint 等代码检查工具以及大淘宝前端代码规范，封装对文件级别的代码进行检查和修复的 Node API |
| [@applint/projectlint](https://www.npmjs.com/package/@applint/projectlint) | 提供项目级别检测和修复 Node API，目前包括 Codemod 检查和修复，未来会支持项目依赖检查（冗余包和风险包）、项目 bundle 体积大小检查 |

## License

[MIT](LICENSE)
