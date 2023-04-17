# CHANGELOG

## 1.1.13

- chore: remove rule `@typescript-eslint/prefer-nullish-coalescing` as it's not smart enough to determine the actual case.

## 1.1.12

- chore: append `eslint-config-prettier` to strict rule set.

## 1.1.11

- chore: remove eslint indent rule

## 1.1.10

- chore: Batch adjustment on `strict` rules, lower the warning level of some rules and remove some unnecessary general rules.

## 1.1.9

- fix: `@typescript-eslint/keyword-spacing` rule will occur Unexpected space(s) before "{" in import type error. Ref: <https://github.com/typescript-eslint/typescript-eslint/issues/6063>
- fix: `@typescript-eslint/no-inferrable-types` will be conflict with `typedef` rule
- chore: remove `react/no-unknown-property` rule
- chore: remove `one-var` rule for ugly code

## 1.1.8

- fix: remove `@typescript-eslint/indent` rule. Ref: <https://github.com/typescript-eslint/typescript-eslint/issues/1824>

## 1.1.7

- fix: eslint 8 breaks `indent` rule when using decorators in params. Ref: <https://github.com/eslint/eslint/issues/15299#issuecomment-968099681>

## 1.1.6

- fix: `@typescript-eslint/ban-types` rule can not be auto fixed in some cases

## 1.1.5

- fix: add rule `jsx-closing-bracket-location` option `line-aligned` to fix jsx code can't be auto fix

## 1.1.4

- chore: remove `@typescript-eslint/prefer-ts-expect-error` for that it maybe will cause ts compile error

## 1.1.3

- chore: remove `@typescript-eslint/consistent-type-imports` for that it depends on typescript v3.8+

## 1.1.2

- fix: add `allowSingleLine` options to `@typescript-eslint/brace-style` rule
- chore: remove `parserOptions.createDefaultProgram` and `parserOptions.project` because it's too slow. Also remove `@typescript-eslint/no-unnecessary-type-arguments`, `@typescript-eslint/prefer-nullish-coalescing`, `@typescript-eslint/await-thenable`, `@typescript-eslint/no-confusing-void-expression`, `@typescript-eslint/promise-function-async`, `@typescript-eslint/no-unnecessary-type-assertion`, `@typescript-eslint/non-nullable-type-assertion-style`
- chore: remove `@typescript-eslint/explicit-member-accessibility`、`@typescript-eslint/consistent-type-definitions`

## 1.1.1

- fix: eslint 8 breaks `indent` rule when using decorators. Ref: <https://github.com/eslint/eslint/issues/15299#issuecomment-968099681>

## 1.1.0

- feat: add typescript strict rules
- feat: add `@typescript-eslint/indent` rule to avoid `cannot read property 'loc' of undefined` problem. Ref: <https://github.com/eslint/eslint/issues/13956>

## 1.0.2

- fix: get ESLint warning when react variables(e.g.: component) were unused

## 1.0.1

- docs: add JavaScript、TypeScript、React rules

## 1.0.0

- feat: use Taobao ESLint spec, including React and TypeScript rules

## 0.1.1

- fix: set `dot-notation` off
- fix: set `prefer-const` off
- fix: set `react-hooks/rules-of-hooks` warn
- fix: set `react/jsx-uses-react` warn
- fix: set `react/jsx-uses-vars` warn

## 0.1.0

- feat: init ESLint config.
