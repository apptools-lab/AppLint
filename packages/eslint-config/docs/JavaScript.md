# 阿里巴巴大淘宝前端 JavaScript 编码规范

## 编码风格

### 1. 引号

**2.1  字符串优先使用`''`单引号。 eslint: [quotes](https://eslint.org/docs/rules/quotes.html)**

```javascript
// bad
const name = "tod";
const name = `tod` ; // 模板字符串中应包含变量或换行，否则需用单引号

// good
const name = 'tod';
```

参考
airbnb 6.1
集团 2.2.5.1

**2.2 强制在 JSX 属性中使用一致的双引号。eslint: [jsx-quotes](https://eslint.org/docs/rules/jsx-quotes)**

HTML 属性通常使用双引号而不是单引号，因此 JSX 属性沿用了这种约定。

```jsx
// bad
<a b='c' />
  
// good
<a b="c" />
```

### 2. eval

**3.1 禁止使用 eval。eslint: [no-eval](https://eslint.org/docs/rules/no-eval)、[no-implied-eval](https://eslint.org/docs/rules/no-implied-eval#disallow-implied-eval-no-implied-eval)**

- `eval` 存在较多安全隐患
- 针对 `setTimeout` 、`setInterval` 可以接受字符串作为执行逻辑的情况的隐式 eval 仍然禁止

```javascript
// bad
const obj = { x: 'foo' };
const key = 'x';
const value = eval('obj.' + key);

// good
const obj = { x: 'foo' };
const key = 'x';
const value = obj[key];

// bad   
etTimeout('alert("Hi!");', 100);

setInterval('alert("Hi!");', 100);

execScript('alert("Hi!")');

window.setTimeout('count = 5', 10);

window.setInterval('foo = bar', 10);

// good
setTimeout(function() {
    alert('Hi!');
}, 100);

setInterval(function() {
    alert('Hi!');
}, 100);
```

参考
airbnb 6.4
集团规范 2.10.1
fb #169

### 3. 缩进、空格与空行

**3.1 使用空格。eslint: [space-before-function-paren](https://eslint.org/docs/rules/space-before-function-paren)、[space-before-blocks](https://eslint.org/docs/rules/space-before-blocks)、[generator-star-spacing](https://eslint.org/docs/rules/generator-star-spacing)、[spaced-comment](https://eslint.org/docs/rules/spaced-comment)、[indent](https://eslint.org/docs/rules/indent.html)、[space-before-blocks](https://eslint.org/docs/rules/space-before-blocks.html)、[keyword-spacing](https://eslint.org/docs/rules/keyword-spacing.html)、[space-infix-ops](https://eslint.org/docs/rules/space-infix-ops.html)、[object-curly-spacing](https://eslint.org/docs/rules/object-curly-spacing.html)、[block-spacing](https://eslint.org/docs/rules/block-spacing)、[comma-spacing](https://eslint.org/docs/rules/comma-spacing)、[key-spacing](https://eslint.org/docs/rules/key-spacing)**

- 使用两个空格作为缩进
- 函数前后使用空格
- generator 中 * 后使用空格，在语法上 `*` 不是 `function` 的修饰符，
- 单行注释、多行注释中开头都增加一个空格
- 在前花括号 `{` 前增加一个空格
- 在控制语句(`if` 、`while` ) 括号前增加空格
- 在参数列表、函数名称声明以及函数调用的括号前不增加空格
- 通过空格分隔开操作符
- 在花括号中增加空格
- 保证块语句的 `{` 符号与其前面的字符以及 `}` 与其后面的字符保证有一个空格
- 保证逗号后有空格而逗号前没有空格
- 保证对象中的键与值有空格

```javascript
// bad
const f = function(){};
const g = function (){};
const h = function() {};

// good
const x = function () {};
const y = function a() {};

```

函数定义

```javascript
// bad
function * foo() {
  // ...
}

// bad
const bar = function * () {
  // ...
};

// good
function* foo() {
  // ...
}

// good
const foo = function* () {
  // ...
};
```

generator 定义

```javascript
// bad
//is current tab
const active = true;

// good
// is current tab
const active = true;

// bad
/**
 *make() returns a new element
 *based on the passed-in tag name
 */
function make(tag) {

  // ...

  return element;
}

// good
/**
 * make() returns a new element
 * based on the passed-in tag name
 */
function make(tag) {

  // ...

  return element;
}
```

注释空格

```javascript
// bad
function test(){
  console.log('test');
}

// good
function test() {
  console.log('test');
}

// bad
dog.set('attr',{
  age: '1 year',
  breed: 'Bernese Mountain Dog',
});

// good
dog.set('attr', {
  age: '1 year',
  breed: 'Bernese Mountain Dog',
});
```

前花括号前增加空格

```javascript
// bad
if(isJedi) {
  fight ();
}

// good
if (isJedi) {
  fight();
}

// bad
function fight () {
  console.log ('Swooosh!');
}

// good
function fight() {
  console.log('Swooosh!');
}
```

括号空格

```javascript
// bad
const x=y+5;

// good
const x = y + 5;
```

操作符空格

```javascript
// bad
const foo = {clark: 'kent'};

// good
const foo = { clark: 'kent' };
```

花括号空格

```javascript
// bad
function foo() {return true;}
if (foo) { bar = 0;}

// good
function foo() { return true; }
if (foo) { bar = 0; }
```

块语句空格

```javascript
// bad
const foo = 1,bar = 2;
const arr = [1 , 2];

// good
const foo = 1, bar = 2;
const arr = [1, 2];
```

逗号空格

```javascript
// bad
const obj = { foo : 42 };
const obj2 = { foo:42 };

// good
const obj = { foo: 42 };
```

对象键值空格

参考
airbnb 7.11 11.3 18.3 19.2 19.3 19.4 19.14 19.15 19.17 19.18
集团规范 1.5.1 3.3

**3.2 不要用空行来填充块语句。eslint: [padded-blocks](https://eslint.org/docs/rules/padded-blocks.html)**

```javascript
// bad
function bar() {

  console.log(foo);

}

// bad
if (baz) {

  console.log(qux);
} else {
  console.log(foo);

}

// bad
class Foo {

  constructor(bar) {
    this.bar = bar;
  }
}

// good
function bar() {
  console.log(foo);
}

// good
if (baz) {
  console.log(qux);
} else {
  console.log(foo);
}
```

参考规范

airbnb 19.8
集团规范 1.6.2

**3.3 不要使用多个连续空行来填充代码。eslint: [no-multiple-empty-lines](https://eslint.org/docs/rules/no-multiple-empty-lines)**

```javascript
// bad
class Person {
  constructor(fullName, email, birthday) {
    this.fullName = fullName;


    this.email = email;


    this.setAge(birthday);
  }


  setAge(birthday) {
    const today = new Date();


    const age = this.getAge(today, birthday);


    this.age = age;
  }


  getAge(today, birthday) {
    // ..
  }
}

// good
class Person {
  constructor(fullName, email, birthday) {
    this.fullName = fullName;
    this.email = email;
    this.setAge(birthday);
  }

  setAge(birthday) {
    const today = new Date();
    const age = getAge(today, birthday);
    this.age = age;
  }

  getAge(today, birthday) {
    // ..
  }
}
```

参考
airbnb 19.9

**3.4 不要在`()`中增加空格。eslint: [space-in-parens](https://eslint.org/docs/rules/space-in-parens.html)**

```javascript
// bad
function bar( foo ) {
  return foo;
}

// good
function bar(foo) {
  return foo;
}

// bad
if ( foo ) {
  console.log(foo);
}

// good
if (foo) {
  console.log(foo);
}
```

参考
aibnb 19.10
集团规范 1.5.1

**3.5 不要在方括号`[]`中增加空格。eslint: [array-bracket-spacing](https://eslint.org/docs/rules/array-bracket-spacing.html)**

```javascript
// bad
const foo = [ 1, 2, 3 ];
console.log(foo[ 0 ]);

// good
const foo = [1, 2, 3];
console.log(foo[0]);
```

参考
airbnb 19.11
集团规范 1.5.1

**3.6 函数调用前后不需要空格。eslint: [func-call-spacing](https://eslint.org/docs/rules/func-call-spacing)**

```javascript
// bad
func ();

func
();

// good
func();
```

参考
airbnb 19.17

**3.7 每行代码末尾避免增加空格。eslint: [no-trailing-spaces](https://eslint.org/docs/rules/no-trailing-spaces)**

```javascript
// bad
console.log('hello world')··

// good
console.log('hello world')
```

参考
airbnb 19.19

**3.8 避免多个连续空行。eslint: [no-multiple-empty-lines](https://eslint.org/docs/rules/no-multiple-empty-lines)**

- 避免首行是一个空行
- 允许文件末尾是一个空行

```javascript
// bad - multiple empty lines
const x = 1;


const y = 2;

// bad - 2+ newlines at end of file
const x = 1;
const y = 2;


// bad - 1+ newline(s) at beginning of file

const x = 1;
const y = 2;

// good
const x = 1;
const y = 2;
```

参考
airbnb 19.20

**3.9 不要混用 tab 与 space。eslint: [no-mixed-spaces-and-tabs](https://eslint.org/docs/rules/no-mixed-spaces-and-tabs#disallow-mixed-spaces-and-tabs-for-indentation-no-mixed-spaces-and-tabs)**

- 保证代码风格一致和可读性

```javascript
// bad
function add(x, y) {
// --->..return x + y;

      return x + y;
}

function main() {
// --->const x = 5,
// --->....y = 7;

    const x = 5,
          y = 7;
}

// good
function add(x, y) {
// --->return x + y;
    return x + y;
}
```

参考
fb #330

**3.10 禁止正则表达式字面量中出现多个空格。eslint: [no-regex-spaces](https://eslint.org/docs/rules/no-regex-spaces)**

正则表达式很复杂且难以理解，在多人协作的项目代码应该尽可能保持简单并可避免出现有效错误。使用正则最容易出错的是使用多个空格。

```javascript
// bad 
const re = /foo   bar/;
const re = new RegExp("foo   bar");

// good
const re = /foo {3}bar/;
const re = new RegExp("foo {3}bar");
```

**3.11 禁止出现多个空格。eslint: [no-multi-spaces](https://eslint.org/docs/rules/no-multi-spaces)**

```javascript
// bad
const a =  1;
if(foo   === "bar") {}
a <<  b
const arr = [1,  2];
a ?  b: c

// good
const a = 1;
if(foo === "bar") {}
a << b
const arr = [1, 2];
a ? b: c
```

**3.12 禁止或强制在计算属性中使用空格。eslint: [computed-property-spacing](https://eslint.org/docs/rules/computed-property-spacing)**

```javascript
// bad
obj[foo ]
obj[ 'foo']
const x = {[ b ]: a}
obj[foo[ bar ]]

// good
obj[foo]
obj['foo']
const x = {[b]: a}
obj[foo[bar]]
```

**3.13 禁止属性前有空格。eslint: [no-whitespace-before-property](https://eslint.org/docs/rules/no-whitespace-before-property)**

JavaScript 允许在对象和它们的属性中间存在空白。然而，不一致的空格会使代码难以阅读，而且可能导致出错。

```javascript
// bad
foo [bar]
foo. bar
foo .bar
foo. bar. baz
foo. bar()
  .baz()
foo
  .bar(). baz()

// good
foo.bar
foo[bar]
foo.bar.baz
foo
  .bar()
  .baz()
```

**3.14 强制将对象的属性放在不同的行上。eslint: [object-property-newline](https://eslint.org/docs/rules/object-property-newline)**

对象的属性需遵循一致的换行风格，所有属性要么都换行，要么都写在一行。

```jsx
/*eslint object-property-newline: ["error", { "allowAllPropertiesOnSameLine": true }]*/

// bad
const newObject = {
    a: 'a.m.', b: 'p.m.',
    c: 'daylight saving time'
};

// good
const newObject = {
    a: 'a.m.', 
    b: 'p.m.',
    c: 'daylight saving time'
};
```

**3.15 强制分号后有空格，分号前有空格。eslint: [semi-spacing](https://eslint.org/docs/rules/semi-spacing)**

```jsx
// bad
const foo ;
const bar;const baz;
throw new Error("error") ;
while (a) { break ; }
for (i = 0 ; i < 10 ; i++) {}
for (i = 0;i < 10;i++) {}

// good
const foo;
const bar; const baz;
throw new Error("error");
while (a) { break; }
for (i = 0; i < 10; i++) {}
for (;;) {}
if (true) {;}
;foo();
```

**3.16 要求或禁止在一元操作符之前或之后有空格。eslint: [space-unary-ops](https://eslint.org/docs/rules/space-unary-ops)**

- 一元操作符两侧**无空格**，比如： -、+、--、++、!、!!
- 单词类一元操作符两侧**有空格**，比如：new、delete、typeof、void、yield

```javascript
// bad
typeof!foo;
void{foo:0};
new[foo][0];
delete(foo.bar);
++ foo;
foo --;
- foo;
+ "3";
function *foo() {
    yield(0)
}
async function foo() {
    await(bar);
}

// good
typeof !foo;
void {foo:0};
new [foo][0];
delete (foo.bar);
++foo;
foo--;
-foo;
+"3";
function *foo() {
    yield (0)
}
async function foo() {
    await (bar);
}
```

**3.17 switch 的 case 和 default 子句冒号前面无空格，后面有空格。eslint: [switch-colon-spacing](https://eslint.org/docs/rules/switch-colon-spacing)**

```jsx
// bad
switch (a) {
    case 0 :break;
    default :foo();
}

// good
switch (a) {
    case 0: foo(); break;
    case 1:
        bar();
        break;
    default:
        baz();
        break;
}
```

**3.18 禁止在模板标记和它们的字面量之前有空格。eslint: [template-tag-spacing](https://eslint.org/docs/rules/template-tag-spacing)**

该规则旨在维持[模板标记函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Template_literals#%E5%B8%A6%E6%A0%87%E7%AD%BE%E7%9A%84%E6%A8%A1%E6%9D%BF%E5%AD%97%E7%AC%A6%E4%B8%B2)和它们的模板字面量直接的空格的一致性。

```jsx
// bad
func `Hello world` ;

// good
func` Hello world` ;
```

**3.19 要求箭头函数的箭头之前和之后要有空格。eslint: [arrow-spacing](https://eslint.org/docs/rules/arrow-spacing)**

```jsx
// bad
()=> {};
() =>{};
(a)=> {};
(a) =>{};
a =>a;
a=> a;
()=> {'\n'};
() =>{'\n'};

// good
() => {};
(a) => {};
a => a;
() => {'\n'};
```

**3.20 强制剩余和扩展运算符及其表达式之间有空格。eslint: [rest-spread-spacing](https://eslint.org/docs/rules/rest-spread-spacing)**

```jsx
// bad
fn(... args)
[... arr, 4, 5, 6]
let [a, b, ... arr] = [1, 2, 3, 4, 5];
function fn(... args) { console.log(args); }
let { x, y, ... z } = { x: 1, y: 2, a: 3, b: 4 };
let n = { x, y, ... z };

// good
fn(...args)
[...arr, 4, 5, 6]
let [a, b, ...arr] = [1, 2, 3, 4, 5];
function fn(...args) { console.log(args); }
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
let n = { x, y, ...z };
```

### 4. 代码长度

**5.1 代码长度最大不超过 120 个字符。eslint: [max-len](https://eslint.org/docs/rules/max-len.html)**

- 保证可读性和维护性

```javascript
// bad
const foo = jsonData && jsonData.foo && jsonData.foo.bar && jsonData.foo.bar.baz && jsonData.foo.bar.baz.quux && jsonData.foo.bar.baz.quux.xyzzy;

// bad
$.ajax({ method: 'POST', url: 'https://airbnb.com/', data: { name: 'John' } }).done(() => console.log('Congratulations!')).fail(() => console.log('You have failed this city.'));

// good
const foo = jsonData
  && jsonData.foo
  && jsonData.foo.bar
  && jsonData.foo.bar.baz
  && jsonData.foo.bar.baz.quux
  && jsonData.foo.bar.baz.quux.xyzzy;

// good
$.ajax({
  method: 'POST',
  url: 'https://airbnb.com/',
  data: { name: 'John' },
})
  .done(() => console.log('Congratulations!'))
  .fail(() => console.log('You have failed this city.'));
```

参考规范

airbnb 19.13
集团规范 1.7.1

### 5. 逗号

**5.1 在多行情况下，使用末尾逗号的风格。eslint: [comma-style](https://eslint.org/docs/rules/comma-style.html)**

```javascript
// bad
const story = [
    once
  , upon
  , aTime
];

// good
const story = [
  once,
  upon,
  aTime,
];

// bad
const hero = {
    firstName: 'Ada'
  , lastName: 'Lovelace'
  , birthYear: 1815
  , superPower: 'computers'
};

// good
const hero = {
  firstName: 'Ada',
  lastName: 'Lovelace',
  birthYear: 1815,
  superPower: 'computers',
};
```

参考
airbnb 20.1
集团规范 1.3.1

### 6. 分号

**6.1 使用分号。 eslint: [semi](https://eslint.org/docs/rules/semi.html)**

- 统一以分号结束语句，可以避免 JS 引擎自动分号插入机制的怪异行为，在语义上也更加明确。
- 自动分号插入机制（即 [Automatic Semicolon Insertion](https://tc39.github.io/ecma262/#sec-automatic-semicolon-insertion)，简称 ASI） 是当 JS 遇到不带分号的语句时判断是否自动添加分号的机制，它在个别情况下的行为比较怪异，可能导致意想不到的效果。此外随着 JS 新特性的增加，异常的情况可能变得更加复杂。

```javascript
// bad - raises exception
const luke = {}
const leia = {}
[luke, leia].forEach((jedi) => jedi.father = 'vader')

// bad - raises exception
const reaction = "No! That’s impossible!"
(async function meanwhileOnTheFalcon() {
  // handle `leia` , `lando` , `chewie` , `r2` , `c3p0`
  // ...
}())

// bad - returns `undefined` instead of the value on the next line - always happens when `return` is on a line by itself because of ASI!
function foo() {
  return
    'search your feelings, you know it to be foo'
}

// good
const luke = {};
const leia = {};
[luke, leia].forEach((jedi) => {
  jedi.father = 'vader';
});

// good
const reaction = "No! That’s impossible!";
(async function meanwhileOnTheFalcon() {
  // handle `leia` , `lando` , `chewie` , `r2` , `c3p0`
  // ...
}());

// good
function foo() {
  return 'search your feelings, you know it to be foo';
}
```

参考
airbnb 21.1
集团规范 1.2.1

**6.2 禁止不必要分号。eslint: [no-extra-semi](https://eslint.org/docs/rules/no-extra-semi)**

```javascript
// bad
const x = 5;;

function foo() {
    // code
};

// good
const x = 5;
function foo() {
 // code
}
```

**6.3 分号必须写在行尾。eslint: [semi-style](https://eslint.org/docs/rules/semi-style)**

```jsx
// bad
foo()
;[1, 2, 3].forEach(bar)

for (
    const i = 0
    ; i < 10
    ; ++i
) {
    foo()
}

// good
foo();
[1, 2, 3].forEach(bar)

for (
    const i = 0;
    i < 10;
    ++i
) {
    foo()
}
```

### 7. 命名规范

**7.1 避免单个字符命名，保障命名能描述实际含义。eslint: [id-length](https://eslint.org/docs/rules/id-length)**

```javascript
// bad
function q() {
  // ...
}

// good
function query() {
  // ...
}
```

参考
airbnb 23.1

**7.2 使用小驼峰 (camelCase) 来命名对象、函数、实例。eslint: [camelcase](https://eslint.org/docs/rules/camelcase.html)**

```javascript
// bad
const OBJEcttsssss = {};
const this_is_my_object = {};
function c() {}

// good
const thisIsMyObject = {};
function thisIsMyFunction() {}
```

参考
airbnb 23.2
集团规范 4.1

**7.3 使用大驼峰 (PascalCase) 来命名构造器函数或类。eslint: [new-cap](https://eslint.org/docs/rules/new-cap.html)**

```javascript
// bad
function user(options) {
  this.name = options.name;
}

const bad = new user({
  name: 'nope',
});

// good
class User {
  constructor(options) {
    this.name = options.name;
  }
}

const good = new User({
  name: 'yup',
});
```

参考
airbnb 23.3
集团规范 4.2

### 8. 调试 debugger

**8.1 保障线上代码不存在`debugger` 语句，避免浏览器因触发调试而停止执行。eslint: [no-debugger](https://eslint.org/docs/rules/no-debugger#disallow-the-use-of-debugger-no-debugger)**

```javascript
// bad
function isTruthy(x) {
    debugger;
    return Boolean(x);
}

// good
function isTruthy(x) {
    return Boolean(x); 
}
```

参考
fb #74

### 9. label

**9.1 禁止使用 label 语句。eslint: [no-labels](https://eslint.org/docs/rules/no-labels)**

- label 导致代码的可读性降低

```javascript
// bad


label:
    while(true) {
        // ...
    }

label:
    while(true) {
        break label;
    }

label:
    while(true) {
        continue label;
    }

label:
    switch (a) {
    case 0:
        break label;
    }

label:
    {
        break label;
    }

label:
    if (a) {
        break label;
    }
```

参考
fb #177

**9.2 禁止不必要的标签。eslint: [no-extra-label](https://eslint.org/docs/rules/no-extra-label)**

如果一个循环中不包含嵌套循环或 switch 语句，对这样的循环使用标签是不必要的。

```javascript
// bad
A: while (a) {
    break A;
}
B: for (let i = 0; i < 10; ++i) {
    break B;
}
// good
while (a) {
    break;
}

for (let i = 0; i < 10; ++i) {
    break;
}
```

**9.3 禁用未使用过的标签。eslint: [no-unused-labels](https://eslint.org/docs/rules/no-unused-labels)**

这样的标签不仅占据代码空间，而且会使读者感到迷惑。

```javascript
// bad
A: const foo = 0;
B: {
    foo();
}
C:
for (let i = 0; i < 10; ++i) {
    foo();
}

// good
A: {
    if (foo()) {
        break A;
    }
    bar();
}
B:
for (let i = 0; i < 10; ++i) {
    if (foo()) {
        break B;
    }
    bar();
}
```

## 代码规范

### 1. 变量声明

**1.1 默认使用`const` 来进行变量引用的声明，如果要重新赋值变量，使用`let` 而不是使用`var` 。 eslint: [prefer-const](https://eslint.org/docs/rules/prefer-const.html)、[no-const-assign](https://eslint.org/docs/rules/no-const-assign.html)、[no-var](https://eslint.org/docs/rules/no-var)、[no-undef](https://eslint.org/docs/rules/no-undef)**

- 不要使用 var ，以及避免未使用任何关键字而产生全局变量
- 需注意，数组和对象是一个引用，对数组某项和对象某属性的修改并不是重新赋值

```javascript
// bad
var a = 1;
var b = 2;

// good
const a = 1;
const b = 2;
```

错误使用 var

```javascript
// bad
foo = 'foo';

// good
const foo = 'foo';
```

错误造成全局变量

```javascript
// bad - 声明后未发生重新赋值，应使用 const
let flag = true;
if (flag) {
  console.log(flag);
}

// good - 声明后发生重新赋值，let 使用正确
let flag = true;
if (flag) {
  flag = false;
}
```

错误使用 let

```javascript
// bad
let arr = [];
let obj = {};
arr[0] = 'foo';
obj.name = 'bar';

// good
const arr = [];
const obj = {};
arr.push('foo');
obj.name = 'bar';
```

针对数组、对象数据类型错误使用 let

参考
airbnb 2.1、2.2
集团规范 2.1.1、2.1.2

**1.2 每个使用`let` 或`const` 来定义的变量或赋值语句都单独一行。eslint: [one-var](https://eslint.org/docs/rules/one-var)**

- 这样做更易于追加新的声明语句（你不需要总去把最后的 `;` 改成 `,` 了）
- 也更易于进行单步调试

```javascript
// bad
const items = getItems(),
    goSportsTeam = true,
    dragonball = 'z';

// bad
// (compare to above, and try to spot the mistake)
const items = getItems(),
    goSportsTeam = true;
    dragonball = 'z';

// good
const items = getItems();
const goSportsTeam = true;
const dragonball = 'z';
```

参考
airbnb 13.2
集团规范 2.1.3

**1.3 使用字面量语法，而不是使用构造函数 eslint: [no-new-object](https://eslint.org/docs/rules/no-new-object.html)、[no-array-constructor](https://eslint.org/docs/rules/no-array-constructor.html)、[no-new-func](https://eslint.org/docs/rules/no-new-func)、[no-obj-calls](https://eslint.org/docs/rules/no-obj-calls#disallow-calling-global-object-properties-as-functions-no-obj-calls)**

```javascript
// bad
const item = new Object();
const items = new Array();

// good
const item = {};
const items = [];

// bad
const add = new Function('a', 'b', 'return a + b');

// still bad
const subtract = Function('a', 'b', 'return a - b');


// bad

const math = Math();

const newMath = new Math();

const json = JSON();

const newJSON = new JSON();

const reflect = Reflect();

const newReflect = new Reflect();

const atomics = Atomics();

const newAtomics = new Atomics();

// good
function area(r) {
    return Math.PI * r * r;
}

const object = JSON.parse("{}");

const value = Reflect.get({ x: 1, y: 2 }, "x");

const first = Atomics.load(foo, 0);

```

参考
airbnb 3.1、4.1
集团规范 2.4.1、2.3.1
fb #104

**1.4 对象属性名优先不使用单引号，除非包含不合法的字符 eslint: [quote-props](https://eslint.org/docs/rules/quote-props)**
> It improves syntax highlighting, and is also more easily optimized by many JS engines. -airbnb 规范

```javascript
const bad = {
  'foo': 3,
  'bar': 4,
  'data-blah': 5,
  'one two': 12,
};

// good
const good = {
  foo: 3,
  bar: 4,
  'data-blah': 5,
  'one two': 12,
};
```

参考
airbnb 3.6
集团规范 2.4.4

**1.5 不要使用链式(chain variable assignments)赋值。 eslint: [no-multi-assign](https://eslint.org/docs/rules/no-multi-assign)**

链式赋值会自动创建不需要全局变量

```javascript
// bad
(function example() {
  // JavaScript interprets this as
  // let a = ( b = ( c = 1 ) );
  // The let keyword only applies to variable a; variables b and c become
  // global variables.
  let a = b = c = 1;
}());

console.log(a); // throws ReferenceError
console.log(b); // 1
console.log(c); // 1

// good
(function example() {
  let a = 1;
  let b = a;
  let c = a;
}());

console.log(a); // throws ReferenceError
console.log(b); // throws ReferenceError
console.log(c); // throws ReferenceError

// the same applies for `const`
```

参考
airbnb 13.5
集团规范 2.1.9

**1.6 避免使用 `=` 时的赋值语句造成的换行。eslint: [operator-linebreak](https://eslint.org/docs/rules/operator-linebreak.html)**

- 如果超过了最大长度，那么用括号将赋值操作包裹起来
- 换行的赋值操作容易使赋值操作变得模糊，不清晰

```javascript
// bad
const foo =
  superLongLongLongLongLongLongLongLongFunctionName();

// bad
const foo
  = 'superLongLongLongLongLongLongLongLongString';

// good
const foo = (
  superLongLongLongLongLongLongLongLongFunctionName()
);

// good
const foo = 'superLongLongLongLongLongLongLongLongString';
```

参考
airbnb 13.7

**1.7 不要定义没有使用的变量。eslint: [no-unused-vars](https://eslint.org/docs/rules/no-unused-vars)**

```javascript
// bad

const some_unused_var = 42;

// Write-only variables are not considered as used.
let y = 10;
y = 5;

// A read for a modification of itself is not considered as used.
let z = 0;
z = z + 1;

// Unused function arguments.
function getX(x, y) {
    return x;
}

// good

function getXPlusY(x, y) {
  return x + y;
}

const x = 1;
const y = a + 2;

alert(getXPlusY(x, y));

```

参考
airbnb 13.8
集团规范 2.1.4

**1.8 不允许初始化变量值为 undefined。eslint: [no-undef-init](https://eslint.org/docs/rules/no-undef-init)**

在 JavaScript 中，声明一个变量但未初始化，变量会自动获得 `undefined` 作为初始值。

```javascript
// bad
const foo = undefined;
let bar = undefined;
// good
const foo;
let bar;
const baz = undefined;
```

### 2. 布尔值

**2.1 避免不必要的布尔类型转换。eslint: [no-extra-boolean-cast](https://eslint.org/docs/rules/no-extra-boolean-cast)**

```javascript
// bad
const foo = !!!bar;
const foo = Boolean(!!bar);

// good
const foo = !!bar;
const foo = Boolean(bar);
```

参考
集团规范 2.2.4

### 3. 数字

**3.1 禁止浮点小数。eslint: [no-floating-decimal](https://eslint.org/docs/rules/no-floating-decimal)**

在 JavaScript 中，浮点值会包含一个小数点，没有要求小数点之前或者之后必须有一个数字。比如 `const num = .5; const num = 2.;` 是有效的。但是这样的格式数字使得真正的小数和点操作符变得难以区分。因此，最好在小数点之前和之后有一个数字，以明确表示是创建一个小数。

```javascript
// bad
const num = .5;
const num = 2.;
const num = -.7;

// good
const num = 0.5;
const num = 2.0;
const num = -0.7;
```

### 4. 对象

**4.1 不要直接使用对象的`Object.prototype` 上的内置方法**

- 例如 `hasOwnProperty` 、`propertyIsEnumerable` 、`isPrototypeOf` eslint: [no-prototype-builtins](https://eslint.org/docs/rules/no-prototype-builtins)
- 内置方法可能在对象上被覆盖
- `Object.create(null)` 创建的对象不存在这些方法

```javascript
const obj = {
  foo: 'foo',
  hasOwnProperty: false,
};
const objNull = Object.create(null);

// bad => Uncaught TypeError: obj.hasOwnProperty is not a function
console.log(obj.hasOwnProperty('foo'));
console.log(objNull.hasOwnProperty('foo'));

// good
console.log(Object.prototype.hasOwnProperty.call(obj, 'foo'));
console.log(Object.prototype.hasOwnProperty.call(objNull, 'foo'));

// best
const has = Object.prototype.hasOwnProperty; // cache the lookup once, in module scope.
console.log(has.call(object, key));
/* or */
import has from 'has'; // https://www.npmjs.com/package/has
console.log(has(object, key));
```

参考
airbnb 3.7
集团规范 2.4.9

**4.2 对象属性优先使用`.`进行访问。eslint: [dot-notation](https://eslint.org/docs/rules/dot-notation.html)**

- `[]` 仅应在访问动态属性名或包含特殊字符的属性名时被使用。  

```javascript
const luke = {
  jedi: true,
  age: 28,
};

// bad
const isJedi = luke['jedi'];

// good
const isJedi = luke.jedi;
```

参考
airbnb 12.1
集团规范 2.4.5

**4.3 不要使用重复的属性名称。eslint: [no-dupe-keys](https://eslint.org/docs/rules/no-dupe-keys#disallow-duplicate-keys-in-object-literals-no-dupe-keys)**

```javascript
// bad
const foo = {
    bar: "baz",
    bar: "qux"
};

// good
const foo = {
    bar: "baz",
    quxx: "qux"
};
```

参考
fb #78

**4.4 对象键名不要使用没必要的计算属性。eslint: [no-useless-computed-key](https://eslint.org/docs/rules/no-useless-computed-key)**

```jsx
// bad
const foo = {["a"]: "b"};
const a = { ['0+1,234']: 0 };

// good
const foo = {"a": "b"};
const a = { "0+1,234": 0 };
```

### 5. 数组

**5.1 在数组方法中必须在回调函数 callback 中包含 return 语句，保证任何情况下都有返回 eslint: [array-callback-return](https://eslint.org/docs/rules/array-callback-return)**

- 在不含有副作用的单条表达式返回语句的情况下，允许忽略 return 语句
- `map` , `filter` , `from` , `every` , `find` , `findIndex` , `reduce` , `reduceRight` , `some` , `sort` 的回调函数中必须包含 `return` 语句

```javascript
// good
[1, 2, 3].map((x) => {
  const y = x + 1;
  return x * y;
});

// good
[1, 2, 3].map((x) => x + 1)


// bad - no returned value means `acc` becomes undefined after the first iteration
[[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {
  const flatten = acc.concat(item);
});

// good
[[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {
  const flatten = acc.concat(item);
  return flatten;
});

// bad
inbox.filter((msg) => {
  const { subject, author } = msg;
  if (subject === 'Mockingbird') {
    return author === 'Harper Lee';
  } else {
    return false;
  }
});

// good
inbox.filter((msg) => {
  const { subject, author } = msg;
  if (subject === 'Mockingbird') {
    return author === 'Harper Lee';
  }

  return false;
});

```

参考

- aibnb 4.7
集团规范 2.3.2

### 6. 字符串

**6.1 字符串拼接优先使用模板字符串。eslint: [prefer-template](https://eslint.org/docs/rules/prefer-template.html)[template-curly-spacing](https://eslint.org/docs/rules/template-curly-spacing)**

- 字符串模板具有更简洁的语法，具备变量插入能力，可读性更高

```javascript
// bad
function sayHi(name) {
  return 'How are you, ' + name + '?';
}

// bad
function sayHi(name) {
  return ['How are you, ', name, '?'].join();
}

// bad
function sayHi(name) {
  return `How are you, ${ name }?`;
}

// good
function sayHi(name) {
  return `How are you, ${name}?`;
}
```

参考
airbnb 6.3
集团规范 2.2.5.2

**6.2 禁止使用不必要的转义字符。eslint: [no-useless-escape](https://eslint.org/docs/rules/no-useless-escape)**

- 反斜杠转义字符大幅降低可读性，尽量有必要时使用

```javascript
// bad
const foo = '\'this\' \i\s \"quoted\"';

// good
const foo = '\'this\' is "quoted"';
const foo = `my name is '${name}'`;
```

### 7. 函数

**7.1 用括号包裹立即执行的函数标识(IIFE)。 eslint: [wrap-iife](https://eslint.org/docs/rules/wrap-iife.html)**

- IIFE 是一个独立的执行单元，将它用小括号包裹可以更清晰的体现这点。需要提醒的是，由于 ES6 模块语法的引入，你几乎不再需要使用 IIFE 了。

```javascript
// immediately-invoked function expression (IIFE)
(function () {
  console.log('Welcome to the Internet. Please follow me.');
}());
```

参考
airbnb 7.2
集团规范 2.5.11

**7.2 不要使用`arguments` 对象，使用语法剩余参数操作符`...`代替。eslint: [prefer-rest-params](https://eslint.org/docs/rules/prefer-rest-params)**

- ES6 提供了 rest 操作符 `...`，与 `arguments` 相比可以更清晰地聚合函数的剩余参数。此外， `...` 得到的是一个真正的数组，而 `arguments` 得到的则是类数组结构

```javascript
// bad
function concatenateAll() {
  const args = Array.prototype.slice.call(arguments);
  return args.join('');
}

// good
function concatenateAll(...args) {
  return args.join('');
}
```

参考
airbnb 7.6
集团规范 2.5.7

**7.3 如果使用匿名函数(例如作为回调函数传递)，使用箭头函数语法。 eslint: [prefer-arrow-callback](https://eslint.org/docs/rules/prefer-arrow-callback.html)**

- 箭头函数会绑定执行上下文的 `this` 对象，语法更简洁
- 当函数的逻辑较复杂的时候，建议将匿名函数改写为具有命名的函数

```javascript
// bad
[1, 2, 3].map(function (x) {
  const y = x + 1;
  return x * y;
});

// good
[1, 2, 3].map((x) => {
  const y = x + 1;
  return x * y;
});
```

参考
airbnb 8.1
集团规范 2.5.4

**7.4 不要使用重复的参数名称。eslint: [no-dupe-args](https://eslint.org/docs/rules/no-dupe-args#disallow-duplicate-arguments-in-function-definitions-no-dupe-args)**

重复的参数名称会造成覆盖、类型错误等问题

```javascript
// bad
function foo(a, b, a) {
    console.log("value of the second a:", a);
}

const bar = function (a, b, a) {
    console.log("value of the second a:", a);
};

// good
function foo(a, b, c) {
    console.log(a, b, c);
}

const bar = function (a, b, c) {
    console.log(a, b, c);
};
```

参考
fb #76

**7.5 不要使用`arguments.caller` 和 `arguments.callee` 。eslint: [no-caller](https://eslint.org/docs/rules/no-caller#disallow-use-of-callercallee-no-caller)**

`arguments.caller` 和 `arguments.callee` 语法会在未来的规范中废弃掉

```javascript
// bad
function foo(n) {
    if (n <= 0) {
        return;
    }

    arguments.callee(n - 1);
}

[1,2,3,4,5].map(function(n) {
    return !(n > 1) ? 1 : arguments.callee(n - 1) * n;
});

// good
function foo(n) {
    if (n <= 0) {
        return;
    }

    foo(n - 1);
}

[1,2,3,4,5].map(function factorial(n) {
    return !(n > 1) ? 1 : factorial(n - 1) * n;
});
```

参考
fb #145

**7.6 要求调用无参构造函数时带括号。eslint: [new-parens](https://eslint.org/docs/rules/new-parens)**

部分开发者认为省略圆括号与整体不一致，从而使代码不清晰。统一带括号可以使得整体风格统一。

```jsx
// bad
const person = new Person;
const person = new (Person);

// good
const person = new Person();
const person = new (Person)();
```

**7.7 避免箭头函数与比较操作符产生混淆。eslint: [no-confusing-arrow](https://eslint.org/docs/rules/no-confusing-arrow)**

```jsx
// bad
const x = a => 1 ? 2 : 3;
const x = (a) => 1 ? 2 : 3;

// good
const x = a => (1 ? 2 : 3);
const x = (a) => (1 ? 2 : 3);
const x = a => { return 1 ? 2 : 3; };
const x = (a) => { return 1 ? 2 : 3; };
```

### 8. 类

**8.1 避免不必要的空实现或者实现仅仅只是代理到父类的构造函数。 eslint: [no-useless-constructor](https://eslint.org/docs/rules/no-useless-constructor)**

```javascript
// bad
class Jedi {
  constructor() {}

  getName() {
    return this.name;
  }
}

// bad
class Rey extends Jedi {
  constructor(...args) {
    super(...args);
  }
}

// good
class Rey extends Jedi {
  constructor(...args) {
    super(...args);
    this.name = 'Rey';
  }
}
```

参考
airbnb 9.5
集团规范 2.6.3

**8.2 避免重复的类成员。eslint: [no-dupe-class-members](https://eslint.org/docs/rules/no-dupe-class-members)**

```javascript
// bad
class Foo {
  bar() { return 1; }
  bar() { return 2; }
}

// good
class Foo {
  bar() { return 1; }
}

// good
class Foo {
  bar() { return 2; }
}
```

参考
airbnb 9.6
集团规范 2.6.5

**8.3 保证子类的构造函数调用了`super` 函数，而非继承的构造函数没有调用`super` 函数。eslint: [constructor-super](https://eslint.org/docs/rules/constructor-super#verify-calls-of-super-in-constructors-constructor-super)**

```javascript
// bad
class A {
    constructor() {
        super();  // This is a SyntaxError.
    }
}

class A extends B {
    constructor() { }  // Would throw a ReferenceError.
}

// Classes which inherits from a non constructor are always problems.
class A extends null {
    constructor() {
        super();  // Would throw a TypeError.
    }
}

class A extends null {
    constructor() { }  // Would throw a ReferenceError.
}

// good
class A {
    constructor() { }
}

class A extends B {
    constructor() {
        super();
    }
}
```

参考
fb #396

**8.4 不要在`super` 调用前使用`this` 。eslint: [no-this-before-super](https://eslint.org/docs/rules/no-this-before-super#disallow-use-of-thissuper-before-calling-super-in-constructors-no-this-before-super)**

```javascript
// bad
class A extends B {
    constructor() {
        this.a = 0;
        super();
    }
}

class A extends B {
    constructor() {
        this.foo();
        super();
    }
}

class A extends B {
    constructor() {
        super.foo();
        super();
    }
}

class A extends B {
    constructor() {
        super(this.foo());
    }
}

// good
class A {
    constructor() {
        this.a = 0; // OK, this class doesn't have an `extends` clause.
    }
}

class A extends B {
    constructor() {
        super();
        this.a = 0; // OK, this is after `super()`.
    }
}

class A extends B {
    foo() {
        this.a = 0; // OK. this is not in a constructor.
    }
}
```

参考
fb #405

### 9. 模块

**9.1 从同一个位置引用同一个路径的内容。eslint: [no-duplicate-imports](https://eslint.org/docs/rules/no-duplicate-imports)**

```javascript
// bad
import foo from 'foo';
// … some other imports … //
import { named1, named2 } from 'foo';

// good
import foo, { named1, named2 } from 'foo';

// good
import foo, {
  named1,
  named2,
} from 'foo';
```

参考
airbnb 10.4

**9.2 将 import 语句放到非 import 的语句位置上方(一般位于代码最上方)。eslint: [import/first](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md)**

- 由于 `import` 语句会被声明提升，将它们放到模块的最上方以防止异常行为

```javascript
// bad
import foo from 'foo';
foo.init();

import bar from 'bar';

// good
import foo from 'foo';
import bar from 'bar';

foo.init();
```

参考
airbnb 10.7
集团规范 2.73

**9.3 禁止在 import 和 export 和解构赋值时将引用重复名为相同的名字。eslint: [no-useless-rename](https://eslint.org/docs/rules/no-useless-rename)**

```jsx
// bad
import { foo as foo } from "bar";
export { foo as foo };
export { foo as foo } from "bar";
let { foo: foo } = bar;
let { 'foo': foo } = bar;
function foo({ bar: bar }) {}
({ foo: foo }) => {}

// good
import * as foo from "foo";
import { foo } from "bar";
import { foo as bar } from "baz";

export { foo };
export { foo as bar };
export { foo as bar } from "foo";

let { foo } = bar;
let { foo: bar } = baz;
let { [foo]: foo } = bar;

function foo({ bar }) {}
function foo({ bar: baz }) {}

({ foo }) => {}
({ foo: bar }) => {}
```

### 10. 运算符

**10.1 使用`===`和`!==`而不是`==`和`!=`。eslint: [eqeqeq](https://eslint.org/docs/rules/eqeqeq)**

- 如果要比较的两个值类型不同，应该显性地将其转换成相同类型再进行严格比较，而不是依赖于 `==` 和 `!=` 的隐式类型转换

```javascript
const id = '83949';

// bad - 为了兼容 id 可能是字符串的情况，而有意使用 == 与数字比较
if (id == 83949) {
  // do something
}

// good - 如果 id 可能是字符串，应该先将其进行类型转换，再使用 === 进行比较
if (Number(id) === 83949) {
  // do something
}
```

参考
airbnb 15.1
集团规范 2.8.1

**10.2 在`switch` 语句中，使用大括号包裹在`case` 与`default` 中有词法声明的情况，例如`let` 、`const` 、`function` 、`class` 。eslint: [no-case-declarations](https://eslint.org/docs/rules/no-case-declarations.html)**

- 避免不同 case 中声明相同的变量

```javascript
// bad
switch (foo) {
  case 1:
    let x = 1;
    break;
  case 2:
    const y = 2;
    break;
  case 3:
    function f() {
      // ...
    }
    break;
  default:
    class C {}
}

// good
switch (foo) {
  case 1: {
    let x = 1;
    break;
  }
  case 2: {
    const y = 2;
    break;
  }
  case 3: {
    function f() {
      // ...
    }
    break;
  }
  case 4:
    bar();
    break;
  default: {
    class C {}
  }
}
```

参考
airbnb 15.5

**10.3 避免不必要的三元表达式语句。eslint: [no-unneeded-ternary](https://eslint.org/docs/rules/no-unneeded-ternary.html)**

```javascript
// bad
const foo = a ? a : b;
const bar = c ? true : false;
const baz = c ? false : true;

// good
const foo = a || b;
const bar = !!c;
const baz = !c;
```

参考
airbnb 15.7
集团规范 2.8.5

**10.4 禁止在`in` 语句中的使用`!`取反左侧运算符。eslint: [no-negated](https://eslint.org/docs/rules/no-negated-in-lhs#disallow-negating-the-left-operand-in-in-expressions-no-negated-in-lhs)**

- 降低运算符优先级的错误率

```javascript
// bad
if(!key in object) {
    // operator precedence makes it equivalent to (!key) in object
    // and type conversion makes it equivalent to (key ? "false" : "true") in object
}

// good
if(!(key in object)) {
    // key is not in object
}

if(('' + !key) in object) {
    // make operator precedence and type conversion explicit
    // in a rare situation when that is the intended meaning
}
```

参考
fb #102

**10.5 强制使用`isNaN()`而不是使用`NaN` 来进行比较。eslint: [use-isnan](https://eslint.org/docs/rules/use-isnan#require-calls-to-isnan-when-checking-for-nan-use-isnan)**

- `NaN` 行为具有较易错的表现，`NaN === NaN` 、`NaN == NaN` 为 false，而 `NaN !== NaN` 、`NaN != NaN` 为 true

```javascript
// bad
if (foo == NaN) {
    // ...
}

if (foo != NaN) {
    // ...
}

if (foo == Number.NaN) {
    // ...
}

if (foo != Number.NaN) {
    // ...
}

// good
if (isNaN(foo)) {
    // ...
}

if (!isNaN(foo)) {
    // ...
}
```

参考
fb #112

**10.6 强制`typeof` 的计算值为固定为合法的字符串字面量。eslint: [valid-typeof](https://eslint.org/docs/rules/valid-typeof#enforce-comparing-typeof-expressions-against-valid-strings-valid-typeof)**

- `"undefined"`、`"boolean"`、`"number"`、`"string"`、`"function"`、`"symbol"`、`"bigint"`
- 避免编码时往往因不注意导致的字面量拼写错误

```javascript
// bad
typeof foo === "strnig"
typeof foo == "undefimed"
typeof bar != "nunber"
typeof bar !== "fucntion"

// good
typeof foo === "string"
typeof bar == "undefined"
typeof bar === typeof qux
```

参考
fb #116

**10.7 禁止对变量使用 delete 运算符。eslint: [no-delete-var](https://eslint.org/docs/rules/no-delete-var#disallow-deleting-variables-no-delete-var)**

```javascript
// bad
const x;
delete x;
```

参考
fb #249

### 11. 块语句 Block

**11.1 使用花括号包裹多行的块语句。eslint: [nonblock-statement-body-position](https://eslint.org/docs/rules/nonblock-statement-body-position)**

- 不省略单行情况下的括号

```javascript
// bad
if (test)
  return false;

// good
if (test) return false;

// good
if (test) {
  return false;
}

// bad
function foo() { return false; }

// good
function bar() {
  return false;
}
```

参考
airbnb 16.1
集团规范 1.4

**11.2 对于非空代码块，采用 Egyptian Brackets 风格。eslint: [brace-style](https://eslint.org/docs/rules/brace-style)**

对于非空的代码块，大括号的换行方式采用 [Egyptian Brackets](https://blog.codinghorror.com/new-programming-jargon/) 风格，具体规则如下：

- 左大括号 `{` 前面不换行，后面换行
- 右大括号 `}` 前面换行
- 右大括号 `}` 后面是否换行有两种情况：
  - 如果 `}` 终结了整个语句，如条件语句、函数或类的主体，则需要换行
  - 如果 `}` 后面存在 `else` 、`catch` 、`while` 等语句，或存在逗号、分号、右小括号（`)`），则不需要换行

```javascript
// bad
if (test) {
  thing1();
  thing2();
}
else {
  thing3();
}

// good
if (test) {
  thing1();
  thing2();
} else {
  thing3();
}
```

参考
airbnb 16.2
集团规范 1.4.2.1

### 12. 类型转换

**12.1 不使用 new 操作符。eslint: [no-new-wrappers](https://eslint.org/docs/rules/no-new-wrappers)**

- 使用 `new Number/String/Boolean` 声明不会有任何好处，还会导致变量成为 `object` 类型，可能引起 bug。

```javascript

// bad
const totalScore = new String(this.reviewScore); // typeof totalScore is "object" not "string"

// bad
const totalScore = this.reviewScore + ''; // invokes this.reviewScore.valueOf()

// bad
const totalScore = this.reviewScore.toString(); // isn’t guaranteed to return a string

// good
const totalScore = String(this.reviewScore);


// bad
const val = new Number(inputValue);

// good
const val = Number(inputValue);


const age = 0;

// bad
const hasAge = new Boolean(age);

// good
const hasAge = Boolean(age);

// best
const hasAge = !!age;
```

```javascript
// bad
const num = new Number(0);
const str = new String('foo');
const bool = new Boolean(false);
console.log(typeof num, typeof str, typeof bool); // => object, object, object
if (num) { // true（对象相当于 true）
}
if (bool) { // true（对象相当于 true）
}

// good
const num = 0;
const str = 'foo';
const bool = false;
console.log(typeof num, typeof str, typeof bool); // => number, string, boolean
if (num) { // false（0 相当于 false）
}
if (bool) { // false

```

参考
airbnb 22.2
集团规范 2.2.1

**12.2 使用 `parseInt()` 方法时，保证一直传递第二个`基数`参数。eslint: [radix](https://eslint.org/docs/rules/radix)**

```javascript
// bad
parseInt("071"); // => ES5 前的执行环境中得到的是 57

// good
parseInt("071", 10); // => 71
```

参考
airbnb 22.3
集团规范 2.2.3

### 13. 标准库([Standard built-in objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects))

**13.1 使用`Number.isNaN` 而不是`global` 上的`isNaN` 。eslint: [no-restricted-globals](https://eslint.org/docs/rules/no-restricted-globals)**

- `global` 上的 `isNaN` 会将非数字强制转换成数字，并且针对转换成 `isNaN` 的情况返回 `true` ，如果这个行为是期望的，那么显式地进行处理

```javascript
// bad
isNaN('1.2'); // false
isNaN('1.2.3'); // true

// good
Number.isNaN('1.2.3'); // false
Number.isNaN(Number('1.2.3')); // true
```

参考
airbnb 29.1

**13.2 使用 `Number.isFinite` 而不是`global` 上的`isFinite`。eslint: [no-restricted-globals](https://eslint.org/docs/rules/no-restricted-globals)**

- `global` 上的 `isFinite` 会强制将非数字转换成数字，会对任何能转换成有限数字的内容返回 `true` ，如果这个操作是期望的，那么显式地进行处理

```javascript
// bad
isFinite('2e3'); // true

// good
Number.isFinite('2e3'); // false
Number.isFinite(parseInt('2e3', 10)); // true
```

参考
airbnb 29.2
