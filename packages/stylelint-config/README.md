# @applint/stylelint-config

阿里巴巴大淘宝前端 Stylelint 可共享配置。参考 [stylelint-config-ali](https://www.npmjs.com/package/stylelint-config-ali)。

## 安装

```bash
npm install stylelint stylelint-scss --save-dev
```

## 使用

创建一个 `.stylelintrc.js` 文件加入以下配置：

```js
// .stylelintrc.js
module.exports = {
  extends: ['@applint/stylelint-config'],
};
```

## 目录

- [缩进](#缩进)
- [分号](#分号)
- [空格](#空格)
- [换行](#换行)
- [属性和属性值](#属性和属性值)
- [选择器](#选择器)
- [@规则](#@规则)
- [函数](#函数)

## 编码规范

## 编码风格

### 1. 缩进

**1.1 统一使用2个空格缩进。stylelint: [indentation](https://stylelint.io/user-guide/rules/indentation)**

```css
/* bad */
a {
    padding-left: 15px;
}

/* good */
a {
  padding-left: 15px;
}
```

### 2. 分号

**2.1 所有声明都应该以分号结尾，不能省略。stylelint: [declaration-block-trailing-semicolon](https://stylelint.io/user-guide/rules/declaration-block-trailing-semicolon)**
虽然 CSS 语法中最后一条声明的分号是可选的，但是使用分号可以增加代码的一致性和易用性。

```css
/* bad */
a { color: pink }
a { 
  background: orange; 
  color: pink 
}

/* good */
a { color: pink; }
a { 
  background: orange; 
  color: pink;
}
```

**2.2 避免出现额外的分号。stylelint: [no-extra-semicolons](https://stylelint.io/user-guide/rules/list/no-extra-semicolons)**

```css
/* bad */
a { 
  color: pink;; 
}
@import "x.css";;
@import "x.css";
;

/* good */
@import "x.css";
a {
  color: pink;
}
```

### 3. 空格

**3.1 函数的逗号之后必须有一个空格，逗号前没有空格。stylelint: [function-comma-space-after](https://stylelint.io/user-guide/rules/list/function-comma-space-after), [function-comma-space-before](https://stylelint.io/user-guide/rules/list/function-comma-space-before)**

```css
/* bad */
a { transform: translate(1,1) }
a { transform: translate(1 ,1) }

/* good */
a { transform: translate(1, 1) }
```

**3.2 函数之间应该有空格隔开。stylelint: [function-whitespace-after](https://stylelint.io/user-guide/rules/list/function-whitespace-after/)**

```css
/* bad */
a { transform: translate(1, 1)scale(3); }

/* good */
a { transform: translate(1, 1) scale(3); }
```

**3.3 属性值的逗号前面没有空格，后面有空格。stylelint: [value-list-comma-space-after](https://stylelint.io/user-guide/rules/list/value-list-comma-space-after/), [value-list-comma-space-before](https://stylelint.io/user-guide/rules/list/value-list-comma-space-before/)**

```css
/* bad */
a { background-size: 0,0; }
a { background-size: 0 ,0; }

a { background-size: 0, 0; }
```

**3.4 属性名和冒号之前无空格，冒号和属性值之间保留一个空格。stylelint: [declaration-colon-space-after](https://stylelint.io/user-guide/rules/declaration-colon-space-after), [declaration-colon-space-before](https://stylelint.io/user-guide/rules/declaration-colon-space-before)**

```css
a {
  margin-top : 10px;
  padding-left:15px;
}

/* good */
a {
  margin-top: 10px;
  padding-left: 15px;
}
```

**3.5 选择器和大括号之间保留一个空格。stylelint: [block-opening-brace-space-before](https://stylelint.io/user-guide/rules/block-opening-brace-space-before)**

```css
/* bad */
a{ color: pink; }

a
{ color: pink; }

/* good */
a { color: pink; }

a {
color: pink; }
```

**3.6 `@media` 括号中的冒号后面需要一个空格，前面不需要空格。[media-feature-colon-space-after](https://stylelint.io/user-guide/rules/list/media-feature-colon-space-after), [media-feature-colon-space-before](https://stylelint.io/user-guide/rules/list/media-feature-colon-space-before/)**

```css
/* bad */
@media (max-width:600px) {}
@media (max-width : 600px) {}

/* good */
@media (max-width: 600px) {}
```

**3.7 `@media` 的范围操作符前后需要一个空格。stylelint: [media-feature-range-operator-space-after](https://stylelint.io/user-guide/rules/list/media-feature-range-operator-space-after/), [media-feature-range-operator-space-before](https://stylelint.io/user-guide/rules/list/media-feature-range-operator-space-before/)**

```css
/* bad */
@media (width>=600px) {}

@media (width >=600px) {}

@media (width>= 600px) {}

/* good */
@media (width >= 600px) {}
```

**3.8 注释内容和注释符之间留有一个空格。stylelint: [comment-whitespace-inside](https://stylelint.io/user-guide/rules/comment-whitespace-inside)**

```css
/* bad */
/*comment*/

/*comment */

/** comment**/

/* good */
/* comment */

/** comment **/

/**
 * comment
 */

/*     comment
*/

/* good */
/* comment */

/** comment **/

/**
 * comment
 */
```

**3.9 函数括号内侧不能有空白符。stylelint: [function-parentheses-space-inside](https://stylelint.io/user-guide/rules/list/function-parentheses-space-inside/)**

```css
/* bad */
a { transform: translate( 1, 1 ); }
a { transform: translate(1, 1 ); }

/* good */
a { transform: translate(1, 1); }
```

**3.10 `@media` 中，括号内不允许有空白符。stylelint: [media-feature-parentheses-space-inside](https://stylelint.io/user-guide/rules/list/media-feature-parentheses-space-inside/)**

```css
/* bad */
@media ( max-width: 300px ) {}
@media ( max-width: 300px) {}

/* good */
@media (max-width: 300px) {}
```

**3.11 在组合选择器之间必须有一个空格。stylelint: [selector-combinator-space-before](https://stylelint.io/user-guide/rules/list/selector-combinator-space-before/), [selector-combinator-space-after](https://stylelint.io/user-guide/rules/selector-combinator-space-after)**

```css
/* bad */
a+ b { color: pink; }
a>b { color: pink; }

/* good */
a + b { color: pink; }
```

### 4. 换行

**4.1 在块的右括号后要求有换行。stylelint: [block-closing-brace-newline-after](https://stylelint.io/user-guide/rules/list/block-closing-brace-newline-after/)**

```css
/* bad */
a { color: pink; }b { color: red; }

a { color: pink;
} b { color: red; }

/* good */
a { color: pink; }
b { color: red; }
```

**4.2 限制选择器之间相邻空行的数量为 0。stylelint: [selector-max-empty-lines](https://stylelint.io/user-guide/rules/list/selector-max-empty-lines/)**

```css
/* bad */
a

b {
  color: red;
}

a,

b {
  color: red;
}

a

>
b {
  color: red;
}

a
>

b {
  color: red;
}

/* good */
a b {
  color: red;
}

a
b {
  color: red;
}

a,
b {
  color: red;
}

a > b {
  color: red;
}

a
>
b {
  color: red;
}
```

**4.3 在 `@media` 规则的分号后需要换行符。stylelint: [at-rule-semicolon-newline-after](https://stylelint.io/user-guide/rules/list/at-rule-semicolon-newline-after/)**

```css
/* bad */
@import url("x.css"); @import url("y.css");

@import url("x.css"); a {}

/* good */
@import url("x.css");
@import url("y.css");

@import url("x.css"); /* end-of-line comment */
a {}

@import url("x.css");

a {}
```

**4.4 在多行块中，开大括号后必须始终有一个换行符，闭大括号之前必须有一个换行符。stylelint: [block-opening-brace-newline-after](https://stylelint.io/user-guide/rules/list/block-opening-brace-newline-after/), [block-closing-brace-newline-before](https://stylelint.io/user-guide/rules/list/block-closing-brace-newline-before)**

```css
/* block-opening-brace-newline-after: 'always' */
/* block-closing-brace-newline-before: 'always' */

/* bad */
a{ color: pink;
}
a {
color: pink; }

/* good */
a {
  color: pink; 
}
```

**4.5 在多行块中，声明块的分号之后必须有一个换行符。stylelint: [declaration-block-semicolon-newline-after](https://stylelint.io/user-guide/rules/list/declaration-block-semicolon-newline-after)**

```css
/* declaration-block-semicolon-newline-after: 'always' */

/* bad */
a {
  color: pink; top: 0;
}

/* good */
a {
  color: pink;
  top: 0;
}
```

## 语言特性

### 1. 属性和属性值

**1.1 不允许属性存在冗余值。stylelint: [shorthand-property-no-redundant-values](https://stylelint.io/user-guide/rules/list/shorthand-property-no-redundant-values/)**
在 CSS 中，以下属性的值可以使用简写，可以使代码更简洁：

- margin
- padding
- border-color
- border-radius
- border-style
- border-width
- grid-gap

```css
/* bad */
a { margin: 1px 1px; }
a { margin: 1px 1px 1px 1px; }
a { padding: 1px 2px 1px; }
a { border-radius: 1px 2px 1px 2px; }

/* good */
a { margin: 1px; }
a { padding: 1px 2px; }
a { border-radius: 1px 2px; }
```

**1.2 指定 16 进制值使用小写字母（小写字母更容易区分）。stylelint: [color-hex-case](https://stylelint.io/user-guide/rules/list/color-hex-case/)**

```css
/* bad */
a {
 color: #1E1E1E;
}

/* good */
a {
  color: #1e1e1e;
}
```

**1.3 指定 16 进制颜色为简写。stylelint: [color-hex-length](https://stylelint.io/user-guide/rules/list/color-hex-length)**

```css
/* bad */
a {
  color: #ffffff;
}

/* good */
a {
  color: #fff;
}
```

**1.4 指定 CSS 属性值为小写。stylelint: [value-keyword-case](https://stylelint.io/user-guide/rules/list/value-keyword-case/)**

```css
/* bad */
a {
  display: Block;
}
a {
  display: bLoCk;
}
a {
  display: BLOCK;
}

/* good */
a {
  display: block;
}
```

**1.5 统一 CSS 属性为小写。stylelint: [property-case](https://stylelint.io/user-guide/rules/list/property-case)**

```css
/* bad */
a {
  Width: 1px;
}

a {
  WIDTH: 1px;
}

a {
  border-Radius: 5px;
}

/* good */
a {
  width: 1px
}
a {
  border-radius: 5px;
}
```

**1.6 长度值是 0 时，省略长度单位。stylelint: [length-zero-no-unit](https://stylelint.io/user-guide/rules/list/length-zero-no-unit/)**
在 CSS 中，长度值为 0 时，它的单位是可选的（长度单位包括：em, ex, ch, vw, vh, cm, mm, in, pt, pc, px, rem, vmin, and vmax）。省略长度单位可以使代码更简洁：

```css
/* bad */
a {
 top: 0px;
  bottom: 0em;
}

/* good */
a {
 top: 0;
  bottom: 0;
}
```

**1.7 小于 1 的值，小数点前需要有 0。stylelint: [number-leading-zero](https://stylelint.io/user-guide/rules/list/number-leading-zero/)**

```css
/* bad */
a { line-height: .5; }
a { transform: translate(2px, .4px); }

/* good */
a { line-height: 0.5; }
a { transform: translate(2px, 0.4px); }

```

**1.8 在数字中不允许尾随 0。stylelint: [number-no-trailing-zeros](https://stylelint.io/user-guide/rules/list/number-no-trailing-zeros/)**
减少无必要的 0，让 CSS 代码更简洁。

```css
/* bad */
a { top: 1.0px }
a { top: 1.01000px }

/* good */
a { top: 1px }
a { top: 1.01px }
```

**1.9 单位应该统一为小写。stylelint: [unit-case](https://stylelint.io/user-guide/rules/list/unit-case/)**

```css
/* bad */
a {
  width: 10PX;
}
a {
  width: 10Px;
}
a {
  width: 10pX;
}

/* good */
a {
  width: 10px;
}
```

**1.10 @media 中属性名使用小写字母。stylelint: [media-feature-name-case](https://stylelint.io/user-guide/rules/list/media-feature-name-case/)**

```css
/* bad */
@media (MIN-WIDTH: 700px) {}
@media not all and (MONOCHROME) {}
@media (min-width: 700px) and (ORIENTATION: landscape) {}
@media (WIDTH > 10em) {}

/* good */
@media (min-width: 700px) {}
@media not all and (monochrome) {}
@media (min-width: 700px) and (orientation: landscape) {}
@media (width > 10em) {}
```

### 2. 选择器

**2.1 伪类选择器使用小写字母。stylelint: [selector-pseudo-class-case](https://stylelint.io/user-guide/rules/list/selector-pseudo-class-case/)**

```css
/* bad */
a:Hover {}
a:hOvEr {}
a:HOVER {}
:ROOT {}
:-MS-INPUT-PLACEHOLDER {}

/* good */
a:hover {}
:root {}
:-ms-input-placeholder {}
```

**2.2 伪元素选择器使用小写字母。stylelint: [selector-pseudo-element-case](https://stylelint.io/user-guide/rules/list/selector-pseudo-element-case/)**

```css
/* bad */
a::Before {}
a::bEfOrE {}

/* good */
a::before {}

```

**2.3 类型选择器使用小写字母。stylelint: [selector-type-case](https://stylelint.io/user-guide/rules/list/selector-type-case/)**

```css
/* bad */
LI {}
A {}

/* good */
li {}
a {}
```

### 3. @规则

**3.1 `@` 规则使用小写字母。stylelint: [at-rule-name-case](https://stylelint.io/user-guide/rules/list/at-rule-name-case/)**

```css
/* bad */
@Charset 'UTF-8';
@MEDIA (min-width: 50em) {}

/* good */
@charset 'UTF-8';
@media (min-width: 50em) {}
```

### 4. 函数

**4.1 函数名是小写字母。stylelint: [function-name-case](https://stylelint.io/user-guide/rules/list/function-name-case/)**

```css
/* bad */
a {
  width: Calc(5% - 10em);
}
a {
  width: cAlC(5% - 10em);
}
a {
  width: CALC(5% - 10em);
}
a {
  background: -WEBKIT-RADIAL-GRADIENT(red, green, blue);
}

/* good */
a {
  width: calc(5% - 10em);
}
a {
  background: -webkit-radial-gradient(red, green, blue);
}
```
