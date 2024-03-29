# @applint/spec

## 1.2.3

- fix: disable `react/self-closing-comp` rule in rax because the self closing comp will be error in some cases

## 1.2.2

- chore: remove `@commitlint/cli` and `prettier` peerDependencies

## 1.2.1

- feat: add global variable `weex` to vue config

## 1.2.0

- feat: support strict rules(`react-ts-strict`, `rax-ts-strict`, `common-ts-strict`)
- chore: add `"postcss-scss` and `"postcss-less` dependencies

## 1.1.1

- fix: missing package `eslint-plugin-rax-compile-time-miniapp`

## 1.1.0

- feat: support lint vue files
- fix: @typescript-eslint/parser dependency is lost
- fix: can't find `@applint/eslint-config` in `@appworks/doctor`
- chore: bump `stylelint-scss` version to `^4.0.0` to support `stylelint@^14`

## 1.0.1

- feat: add `@applint/prettier-config`

## 1.0.0

- refactor: transform language from JS to TS
- feat: update `@applint/eslint-config` and `@applint/stylelint-config`

## 0.1.0

- feat: init eslint/stylelint/prettier/commitlint rules.
