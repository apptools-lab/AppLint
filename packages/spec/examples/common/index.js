function foo3() {
  console.log(123);
}

'a';
'b';
'c';

eval('console.log(123)');

// 函数定义
const f = function(){};
const g = function (){};
const h = function() {};

// generator 定义
function * foo1() {}
const bar = function * () {};

// 注释空格
//is current tab

/**
 *make() returns a new element
 *based on the passed-in tag name
 */

// 前花括号前增加空格
function test(){
  console.log('test');
}
(new Set()).set('attr',{
  age: '1 year',
  breed: 'Bernese Mountain Dog',
});

// 括号空格
if(isJedi) {
  fight ();
}
function fight () {
  console.log ('Swooosh!');
}

// 操作符空格
const x=y+5;

// 花括号空格
const foo = {clark: 'kent'};

// 块语句空格
function foo22() {return true;}
if (foo) { bar = 0;}

// 逗号空格
var foo11 = 1,bar22 = 2;
var arr = [1 , 2];

// 对象键值空格
var obj = { foo : 42 };
var obj2 = { foo:42 };

function bar1() {

  console.log(foo);

}

// 不要用空行来填充块语句
if (baz) {

  console.log(qux);
} else {
  console.log(foo);

}

// 禁止使用多个连续空行来填充代码
var foo4 = 5;


var bar3 = 3;

// 禁止在空格 () 中增加空格
function bar5( foo ) {
  return foo;
}

if ( foo ) {
  console.log(foo);
}

// 不要在方括号 [] 中增加空格
const foo5 = [ 1, 2, 3 ];

// 函数调用前后不需要空格
func ();

func
()

//  每行代码末尾避免增加空格
console.log('hello world')  

// 在多行情况下，使用末尾逗号的风格
const story = [
  once
, upon
, aTime
];

const hero = {
  firstName: 'Ada'
, lastName: 'Lovelace'
, birthYear: 1815
, superPower: 'computers'
};

const hero1 = {
  firstName: 'Florence',
  lastName: 'Nightingale'
};

// 使用分号
const reaction = 'No! That’s impossible!'

void async function meanwhileOnTheFalcon() {
  // handle `leia`, `lando`, `chewie`, `r2`, `c3p0`
  // ...
}()

function foo6() {
  return
    'search your feelings, you know it to be foo'
}

// 错误使用 var
var a = 1;
var b = 2;
// 错误造成全局变量
foo7 = 'foo';

// 错误使用 let
let flag = true;
if (flag) {
  console.log(flag);
}

// 针对数组、对象数据类型错误使用 let
let arr1 = [];
let obj3 = {};
arr[0] = 'foo';
obj.name = 'bar';

const items = goSportsTeam = true,
    dragonball = 'z';
  
// 使用字面量语法，而不是使用构造函数
const item = new Object();
const items3 = new Array();
const add = new Function('a', 'b', 'return a + b');
const subtract = Function('a', 'b', 'return a - b');

// 对象属性名优先不实用单引号，除非包含不合法的字符
const bad = {
  'foo': 3,
  'bar': 4,
  'data-blah': 5,
  'one two': 12,
};

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


const foo9 = 
  'superLongLongLongLongLongLongLongLongString';

const some_unused_var = 42;

// Write-only variables are not considered as used.
let y1 = 10;
y1 = 5;

// Unused function arguments.
function getX(x, y) {
  return x;
}

const obj23 = {
  foo: 'foo',
  hasOwnProperty: false,
};
const objNull = Object.create(null);

// bad => Uncaught TypeError: obj.hasOwnProperty is not a function
console.log(obj23.hasOwnProperty('foo'));
console.log(objNull.hasOwnProperty('foo'));

const luke = {
  jedi: true,
  age: 28,
};

// 对象属性优先使用 . 进行访问
const isJedi = luke['jedi'];

[[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {
  const flatten = acc.concat(item);
});

[{ subtract: 'Mockingbird', author: 'Harper Lee' }].filter((msg) => {
  const { subject, author } = msg;
  if (subject === 'Mockingbird') {
    author === 'Harper Lee';
  } else {}
});

import foo2 from 'foodf';
// … some other imports … //
import { named1, named2 } from 'foodf';

if (test)
  console.log(3)

if (test) {
  const bbc = 3;
}
else {
  const bbc = 3;
}

const totalScore = new String(this.reviewScore); // typeof totalScore is "object" not "string"
const totalScore1 = this.reviewScore + ''; // invokes this.reviewScore.valueOf()
const totalScore2 = this.reviewScore.toString(); // isn’t guaranteed to return a string
const val = new Number(inputValue);
const hasAge = new Boolean(age);

isNaN('1.2');
isNaN('1.2.3');
isFinite('2e3'); // true
