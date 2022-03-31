# 阿里巴巴大淘宝前端 TypeScript 编码规范

**本文档未包含的编码风格说明均默认遵循[《JavaScript 编码规范》](packages/eslint-config/docs/javascript.md)编码规范。**

## 编码风格

### 1. 空格

**1.1 运算符两侧需要有空格。[@typescript-eslint/space-infix-ops](https://typescript-eslint.io/rules/space-infix-ops)**

继承 [eslint/space-infix-ops](https://eslint.org/docs/rules/space-infix-ops)，并增加对枚举类型支持。

```typescript
// bad
a+b

a+ b

a +b

a?b:c

const a={b:1};

var {a=0}=bar;

function foo(a=0) { }

enum MyEnum {
  KEY='value',
}

// good
a ? b : c
a + b
const a = {b:1};

var {a = 0} = bar;

function foo(a = 0) { }

enum MyEnum {
  KEY = 'value',
}
```

**1.2 关键字前后有一个空格。[@typescript-eslint/keyword-spacing](https://typescript-eslint.io/rules/keyword-spacing/)**

继承 [eslint/keyword-spacing](https://eslint.org/docs/rules/keyword-spacing)，并增加了对函数调用的泛型类型参数的支持。

```typescript
// bad
if(true) {
  console.log(123);
}

// good
if (true) {
  console.log(123);
}
```

**1.3 指定类型时应该正确添加空格。[@typescript-eslint/type-annotation-spacing](https://typescript-eslint.io/rules/type-annotation-spacing/)**

在类型附近添加空格有助于提高代码的可读性。

```typescript
// bad
let foo:string = "bar";
let foo :string = "bar";
let foo : string = "bar";

function foo():string {}
function foo() :string {}
function foo() : string {}

class Foo {
    name:string;
}

class Foo {
    name :string;
}

class Foo {
    name : string;
}

type Foo = ()=>{};
type Foo = () =>{};
type Foo = ()=> {};

// good
let foo: string = "bar";

function foo(): string {}

class Foo {
    name: string;
}

type Foo = () => {};
```

**1.4 调用函数时，函数名与括号之间没有空格。[@typescript-eslint/func-call-spacing](https://typescript-eslint.io/rules/func-call-spacing/)**

继承 [eslint/func-call-spacing](https://eslint.org/docs/rules/func-call-spacing)，增加了对函数调用的泛型类型参数的支持。

```typescript
// bad
fn ();

fn
();

// good
fn();
```

**1.5 大括号内部两侧有空格。[@typescript-eslint/object-curly-spacing](https://typescript-eslint.io/rules/object-curly-spacing/)**

继承 [eslint/object-curly-spacing](https://eslint.org/docs/rules/object-curly-spacing)，增加对「对象类型」的支持。

```typescript
// bad
interface Props {a: string}

// good
interface Props { a: string }
```

**1.6 逗号前面没空格，后面有空格。[@typescript-eslint/comma-spacing](https://typescript-eslint.io/rules/comma-spacing/)**

```typescript
// bad
var foo = 1 ,bar = 2;
function Home(a: number,b: string) {}

// good
var foo = 1, bar = 2;
function Home(a: number, b: string) {}
```

**1.7 函数声明时，对于命名函数，参数的小括号前无空格；对于匿名函数和 async 箭头函数，参数的小括号前有空格。[@typescript-eslint/space-before-function-paren](https://typescript-eslint.io/rules/space-before-function-paren/)**

继承 [eslint/space-before-function-paren](https://eslint.org/docs/rules/space-before-function-paren)，并增加了对函数调用的泛型类型参数的支持。

```typescript
// bad
function foo () {
    // ...
}

var bar = function() {
    // ...
};

class Foo {
    constructor () {
        // ...
    }
}

var foo = {
    bar () {
        // ...
    }
};

var foo = async(a) => await a

// good
function foo<T>(): T {
    // ...
}

var bar = function () {
    // ...
};

class Foo {
    constructor() {
        // ...
    }
}

var foo = {
    bar() {
        // ...
    }
};

var foo = async (a) => await a
```

### 2. 分号

**2.1 `interface` 和 `type` 里的成员统一使用分号进行分割，单行类型的最后一个元素不加分号。[@typescript-eslint/member-delimiter-style](https://typescript-eslint.io/rules/member-delimiter-style)**

```typescript
// bad
// missing semicolon delimiter
interface Foo {
    name: string
    greet(): string
}

// using incorrect delimiter
interface Bar {
    name: string,
    greet(): string,
}

// missing last member delimiter
interface Baz {
    name: string;
    greet(): string
}

// incorrect delimiter
type FooBar = { name: string, greet(): string }

// last member should not have delimiter
type FooBar = { name: string; greet(): string; }

// good
interface Foo {
    name: string;
    greet(): string;
}

interface Foo { name: string }

type Bar = {
    name: string;
    greet(): string;
}

type Bar = { name: string }

type FooBar = { name: string; greet(): string }
```

**2.2 强制在语句后一致使用分号。[@typescript-eslint/semi](https://typescript-eslint.io/rules/semi/)**

继承 [eslint/semi](https://eslint.org/docs/rules/semi) 规则，增加了对需要分号的 TypeScript 功能的支持。

```typescript
// bad
var name = "ESLint" as string

object.method = function() {
    // ...
}

class Foo {
    bar = 1
}

// good
var name = "ESLint" as string;

object.method = function() {
    // ...
};

class Foo {
    bar = 1;
}
```

### 3. 引号

**3.1 字符串字面量使用单引号包裹。[@typescript-eslint/quotes](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md)**

```typescript
// bad
type EventNames = "click" | "scroll" | "mousemove";

// good
type EventNames = 'click' | 'scroll' | 'mousemove';
```

### 4. 逗号

**4.1 用逗号分割多行结构，始终加上最有一个逗号（单行不用）。[@typescript-eslint/comma-dangle](https://typescript-eslint.io/rules/comma-dangle/)**

继承 [eslint/comma-dangle](https://eslint.org/docs/rules/comma-dangle)，并支持 TypeScript 的语法。

```typescript
// bad
var foo = {
    bar: "baz",
    qux: "quux"
};

// good
var foo = {
    bar: "baz",
    qux: "quux",
};
```

### 5. 块语句

**5.1 对于非空代码块，采用 Egyptian Brackets 风格。[@typescript-eslint/brace-style](https://typescript-eslint.io/rules/brace-style)**

继承 [eslint/brace-style](https://eslint.org/docs/rules/brace-style)，增加对 `enum`、`interface`、`namespace`、`module` 的支持。

```typescript
enum Type = {
  off = 0,
  warn = 1,
  error = 2,
}
```

## 语言特性

### 1. 变量声明

**1.1 不要使用 new Array() 和 Array() 创建数组，除非为了构造某一长度的空数组。[@typescript-eslint/no-array-constructor](https://typescript-eslint.io/rules/no-array-constructor/)**

继承自 [eslint/no-array-constructor](https://eslint.org/docs/rules/no-array-constructor)，它增加了对泛型数组构造函数（`new Array<Foo>()`）的支持。

```typescript
/*eslint no-array-constructor: "error"*/

// bad
Array(0, 1, 2);
new Array(0, 1, 2);

// good
Array<number>(0, 1, 2);
new Array<Foo>(x, y, z);

Array(500);
new Array(someOtherArray.length);
```

### 2. 类型

**2.1 禁止部分值被作为类型标注，需要对每一种被禁用的类型提供特定的说明。[@typescript-eslint/ban-types](https://typescript-eslint.io/rules/ban-types)**

- 不使用大写的原始类型，应该使用小写的类型
- 对于对象类型，应使用 `Record<string, unknown>`，而不是 object
- 对于函数类型，应使用入参和返回值被标注的具体类型

```typescript
// bad
// use lower-case primitives for consistency
const str: String = 'foo';
const bool: Boolean = true;
const num: Number = 1;
const symb: Symbol = Symbol('foo');

const func: Function = () => 1;

const capitalObj1: Object = 1;
const capitalObj2: Object = { a: 'string' };

const curly1: {} = 1;
const curly2: {} = { a: 'string' };

// good
const str: string = 'foo';
const bool: boolean = true;
const num: number = 1;
const symb: symbol = Symbol('foo');

const func: () => number = () => 1;

const lowerObj: object = {};

const capitalObj1: number = 1;
const capitalObj2: { a: string } = { a: 'string' };

const curly1: number = 1;
const curly2: Record<'a', string> = { a: 'string' };
```

**2.2 不允许不必要的类型标注，但允许类的属性成员进行额外标注。[@typescript-eslint/no-inferrable-types](https://typescript-eslint.io/rules/no-inferrable-types)**

```typescript
// bad
const a: bigint = 10n;
const a: bigint = -10n;
const a: bigint = BigInt(10);
const a: bigint = -BigInt(10);
const a: boolean = false;
const a: boolean = true;
const a: boolean = Boolean(null);
const a: boolean = !0;
const a: number = 10;
const a: number = +10;
const a: number = -10;
const a: number = Number('1');
const a: number = +Number('1');
const a: number = -Number('1');
const a: number = Infinity;
const a: number = +Infinity;
const a: number = -Infinity;
const a: number = NaN;
const a: number = +NaN;
const a: number = -NaN;
const a: null = null;
const a: RegExp = /a/;
const a: RegExp = RegExp('a');
const a: RegExp = new RegExp('a');
const a: string = 'str';
const a: string = `str`;
const a: string = String(1);
const a: symbol = Symbol('a');
const a: undefined = undefined;
const a: undefined = void someValue;

function fn(a: number = 5, b: boolean = true) {}

// good
const a = 10n;
const a = -10n;
const a = BigInt(10);
const a = -BigInt(10);
const a = false;
const a = true;
const a = Boolean(null);
const a = !0;
const a = 10;
const a = +10;
const a = -10;
const a = Number('1');
const a = +Number('1');
const a = -Number('1');
const a = Infinity;
const a = +Infinity;
const a = -Infinity;
const a = NaN;
const a = +NaN;
const a = -NaN;
const a = null;
const a = /a/;
const a = RegExp('a');
const a = new RegExp('a');
const a = 'str';
const a = `str`;
const a = String(1);
const a = Symbol('a');
const a = undefined;
const a = void someValue;

class Foo {
  prop: number = 5;
}

function fn(a = 5, b = true) {}
```

**2.3 不允许与默认约束一致的泛型约束。[@typescript-eslint/no-unnecessary-type-constraint](https://typescript-eslint.io/rules/no-unnecessary-type-constraint)**

在 TS 3.9 版本以后，对于未指定的泛型约束，默认使用 `unknown` ，在这之前则是 `any`

```typescript
// bad
interface FooAny<T extends any> {}
interface FooUnknown<T extends unknown> {}

// good
interface Foo<T> {}
```

### 3. 运算符

**3.1 不允许非空断言与空值合并同时使用。[@typescript-eslint/no-non-null-asserted-nullish-coalescing](https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing)**

```typescript
// bad
foo! ?? bar;
foo.bazz! ?? bar;
foo!.bazz! ?? bar;
foo()! ?? bar;

// good
foo ?? bar;
foo ?? bar!;
foo!.bazz ?? bar;
foo!.bazz ?? bar!;
foo() ?? bar;
```

**3.3 不允许非空断言与可选链同时使用。[@typescript-eslint/no-non-null-asserted-optional-chain](https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain)**

```typescript
// bad
foo?.bar!;
foo?.bar()!;

// good
foo?.bar;
foo?.bar();
```

### 4. 循环

**4.1 如果索引仅用于访问正在迭代的数组，则首选 `for...of` 而不是 `for` 循环遍历数组。[@typescript-eslint/prefer-for-of](https://typescript-eslint.io/rules/prefer-for-of)**

```typescript
// bad
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// good
for (const x of arr) {
  console.log(x);
}

for (let i = 0; i < arr.length; i++) {
  // i is used to write to arr, so for-of could not be used.
  arr[i] = 0;
}

for (let i = 0; i < arr.length; i++) {
  // i is used independent of arr, so for-of could not be used.
  console.log(i, arr[i]);
}
```

### 5. 函数

**5.1 重载的函数必须写在一起。[@typescript-eslint/adjacent-overload-signatures](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md)**

相关的项组合在一起将提高代码可读性和组织性。

```typescript
// bad
declare namespace Foo {
  export function foo(s: string): void;
  export function foo(n: number): void;
  export function bar(): void;
  export function foo(sn: string | number): void;
}

// good
declare namespace Foo {
  export function foo(s: string): void;
  export function foo(n: number): void;
  export function foo(sn: string | number): void;
  export function bar(): void;
}
```

**5.2 具有默认值的函数参数应该被放置到参数列表右边。[@typescript-eslint/default-param-last](https://typescript-eslint.io/rules/default-param-last)**

默认值可以让函数少传实参时还能正常执行，否则会出现异常的行为。

```typescript
// bad
function f(a = 0, b: number) {}
function f(a: number, b = 0, c: number) {}
function f(a: number, b?: number, c: number) {}
class Foo {
  constructor(public a = 10, private b: number) {}
}
class Foo {
  constructor(public a?: number, private b: number) {}
}

// good
function f(a = 0) {}
function f(a: number, b = 0) {}
function f(a: number, b?: number) {}
function f(a: number, b?: number, c = 0) {}
function f(a: number, b = 0, c?: number) {}
class Foo {
  constructor(public a, private b = 0) {}
}
class Foo {
  constructor(public a, private b?: number) {}
}
```

### 6. 枚举

**6.1 对于枚举成员值，只允许使用普通字符串、数字、null、正则，而不允许变量复制、模板字符串等需要计算的操作。[@typescript-eslint/prefer-literal-enum-member](https://typescript-eslint.io/rules/prefer-literal-enum-member/)**

可能会在运行时动态修改枚举成员，导致可能出现异常行为。

```typescript
let str = 'Test';
enum Invalid {
  A = str, // Variable assignment
  B = {}, // Object assignment
  C = `A template literal string`, // Template literal
  D = new Set(1, 2, 3), // Constructor in assignment
  E = 2 + 2, // Expression assignment
}

enum Valid {
  A,
  B = 'TestStr', // A regular string
  C = 4, // A number
  D = null,
  E = /some_regex/,
}
```

### 7. 模块

**7.1 不允许对同一模块重复导入。[@typescript-eslint/no-duplicate-imports](https://typescript-eslint.io/rules/no-duplicate-imports)**
继承于 [no-duplicate-imports](https://eslint.org/docs/rules/no-duplicate-imports)，此规则增加对类型导入的支持，类型可重复导入。

```typescript
// bad
import foo from 'foo';
// … some other imports … //
import { named1, named2 } from 'foo';

// good
import foo, { named1, named2 } from 'foo';
import type { Foo } from 'foo';
```

### 8. namespace

**88.1 禁止使用 module 来定义命名空间。[@typescript-eslint/prefer-namespace-keyword](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md)**

module 已经成为 JS 语言的关键字，应避免 TypeScript 模块与 ES2015 模块混淆。declare module 不做限制。

```typescript
// bad
module Foo {}

// good
namespace Foo {}
declare namespace Foo {}
```

### 9. interface

**9.1 接口中的方法使用属性的方式定义。[@typescript-eslint/method-signature-style](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/method-signature-style.md)**

使用属性去定义接口中的方法，可以获得更严格的检查。[相关 PR](https://github.com/microsoft/TypeScript/pull/18654)。

```typescript
// bad
interface T1 {
  func(arg: string): number;
}
type T2 = {
  func(arg: boolean): void;
};
interface T3 {
  func(arg: number): void;
  func(arg: string): void;
  func(arg: boolean): void;
}

// good
interface T1 {
  func: (arg: string) => number;
}
type T2 = {
  func: (arg: boolean) => void;
};
// 属性方法实现重载
interface T3 {
  func: ((arg: number) => void) &
    ((arg: string) => void) &
    ((arg: boolean) => void);
}
```

**9.2 不允许定义空的接口，允许单继承下的空接口。[@typescript-eslint/no-empty-interface](https://typescript-eslint.io/rules/no-empty-interface)**

```typescript
// bad
interface Foo {}

// good
interface Foo {
  name: string;
}

interface Baz extends Foo, Bar {}
```

### 10. 断言

**10.1 禁止使用容易混淆的非空断言。[@typescript-eslint/no-confusing-non-null-assertion](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-confusing-non-null-assertion.md)**

在相等比较运算符（`==` 或 `===`）前使用非空断言（`!`）很容易和不等运算符（`!=` 或 `!==`）混淆，不建议使用。

```typescript
interface Foo {
  bar?: string;
  num?: number;
}

// bad
const foo: Foo = getFoo();
const isEqualsBar = foo.bar! == 'hello';
const isEqualsNum = 1 + foo.num! == 2;

// good
const foo: Foo = getFoo();
const isEqualsBar = foo.bar == 'hello';
const isEqualsNum = (1 + foo.num!) == 2;
```

**10.2 不允许额外的非空断言。[@typescript-eslint/no-extra-non-null-assertion](https://typescript-eslint.io/rules/no-extra-non-null-assertion/)**

```typescript
// bad
const foo: { bar: number } | null = null;
const bar = foo!!!.bar;

function foo(bar: number | undefined) {
  const bar: number = bar!!!;
}

function foo(bar?: { n: number }) {
  return bar!?.n;
}

// good
const foo: { bar: number } | null = null;
const bar = foo!.bar;

function foo(bar: number | undefined) {
  const bar: number = bar!;
}

function foo(bar?: { n: number }) {
  return bar?.n;
}
```

**10.3 使用 `as` 进行类型断言而不是 `<>`。[@typescript-eslint/consistent-type-assertions](https://typescript-eslint.io/rules/consistent-type-assertions)**

- 使用 `<>` 进行类型断言，会出现 JSX 语法冲突的问题

```typescript
// bad
const x = <number>y;
           
// good
const x = y as number;
```

### 11. 注释

**11.1 禁止使用 `tslint:<rule-flag>` 等相关注释，tslint 已经不再维护了。[@typescript-eslint/ban-tslint-comment](https://typescript-eslint.io/rules/ban-tslint-comment/)**

```typescript
// bad
/* tslint:disable */
/* tslint:enable */
/* tslint:disable:rule1 rule2 rule3... */
/* tslint:enable:rule1 rule2 rule3... */
// tslint:disable-next-line
someCode(); // tslint:disable-line
// tslint:disable-next-line:rule1 rule2 rule3...

// good
// This is a comment that just happens to mention tslint
/* This is a multiline comment that just happens to mention tslint */
someCode(); // This is a comment that just happens to mention tslint
```

**11.2 禁止使用其他 `@ts` 规则，除非提供必要的说明。[@typescript-eslint/ban-ts-comment](https://typescript-eslint.io/rules/ban-ts-comment)

- 避免开发者随意使用 `@ts-` 指令

```typescript
// bad
if (false) {
  // @ts-ignore
  console.log('hello');
}

// good
if (false) {
  // @ts-ignore: Unreachable code error
  console.log('hello');
}
```
