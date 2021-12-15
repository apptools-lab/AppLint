# @applint/applint

提供 ESLint、Stylelint 等 Node API，对文件级别的代码进行质量扫描与修复。

## API

### 扫描或修复 JS 代码 Lint 问题

```ts
import ESLint from '@applint/applint/dist/eslint';

const directory = '/code';
const ruleKey = "react-ts";
const files = [
  {
    path: "/Users/luhc228/AppLint/code/src/app.ts",
    source: "console.log(123123)\n\n// MPA 模式下该文件无效\nimport { runApp } from 'rax-app';\n\nconst appConfig = {};\nrunApp(appConfig);",
    LoC: 7,
  }
];

void async function () {
  const eslint = new ESLint({ directory, ruleKey, files });
  const scanResult = await eslint.scan();
  console.log('scanResult: ', scanResult);

  const fixResult = await eslint.fix();
  console.log('fixResult: ', fixResult);
}()
```
