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
// bad
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