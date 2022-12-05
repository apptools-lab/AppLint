# 阿里巴巴大淘宝前端 React 编码规范

## 编码风格

### 1. 缩进

**1.1 JSX 语法使用两个空格缩进。eslint: [react/jsx-indent](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md), [react/jsx-indent-props](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md)**

```jsx
// bad
<Hello>
  marklar
  </Hello>
<Hello>
  marklar</Hello>
<Hello
firstName="John"
/>
<App>
<Hello />
</App>

// good
<Hello>
  marklar
</Hello>
<Hello>marklar</Hello>
<Hello
  firstName="John"
/>
<App>
  <Hello />
</App>
```

### 2. 空格

**2.1 JSX 属性大括号内部两侧无空格。eslint: [react/jsx-curly-spacing](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md)**

```jsx
// bad
<Hello name={ firstname } />;
<Hello name={ firstname} />;
<Hello name={firstname } />;

// good
<Hello name={firstname} />;
```

**2.2 JSX 属性的等号两边不加空格。eslint: [react/jsx-equals-spacing](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md)**

```jsx
// bad
<Hello name = {firstname} />;
<Hello name ={firstname} />;
<Hello name= {firstname} />;

// good
<Hello name={firstname} />;
```

**2.3 JSX 行内属性之间只有一个空格。eslint: [react/jsx-props-no-multi-spaces](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md)**

```jsx
// bad
<App  spacy />
<App too  spacy />

// good
<App cozy />
<App very cozy />
```2.4 检查 JSX 元素中的开始和结束标签的空格。eslint:[react/jsx-tag-spacing](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md)

- 闭合斜线左边不允许有空格 `</`，闭合斜线右边不允许有空格 `/>`；
- 自闭合标签中闭合斜线左边有空格，右边无空格 `<xx />`；
- 开始标签前不允许有空格 `<a>`。

```jsx
// bad
<App/ >
<input/
>
<Provider>< /Provider>

// good
<App/>
<input/>
<Provider></Provider>
  
// bad
<Hello/>
<Hello firstname="John"/>
  
// good
<Hello />
<Hello firstName="John" />
<Hello
  firstName="John"
  lastName="Smith"
/>

// bad
< Hello></ Hello>
< Hello firstName="John"/>
<
  Hello
  firstName="John"
  lastName="Smith"
/>

// good
<Hello></Hello>
<Hello firstname="John"/>
<Hello
  firstName="John"
  lastName="Smith"
/>
```

### 3. 引号

**3.1 强制在 JSX 属性中使用一致的双引号。eslint: [jsx-quotes](https://eslint.org/docs/rules/jsx-quotes)**

HTML 属性通常使用双引号而不是单引号，因此 JSX 属性沿用了这种约定。

```jsx
// bad
<a b='c' />
  
// good
<a b="c" />
```

### 4. 换行

**4.1 当大括号中的JSX 属性和表达式占用多行时，则大括号需要换行，如果是单行，则不需要换行。eslint: [react/jsx-curly-newline](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md)**

```jsx
// bad
<div>
  { foo
  }
</div>

<div>
  {
    foo }
</div>

// good
<div>
  { foo }
</div>

<div>
  {
    foo
  }
</div>
```

**4.2 标签属性换行。eslint: [react/jsx-max-props-per-line](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md), [react/jsx-first-prop-new-line](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md)**

- 标签有多个属性且换行，每个属性都独占一行
- 如果JSX标签占用多行并且有多个属性，则第一个属性应始终放在新行上

```jsx
// bad
<Hello foo={{
    }}
    bar />

// good
<Hello foo={{
}} />

<Hello
    foo={{
    }}
    bar
/>

// bad
<Hello
  firstName="John" lastName="Smith"
  tel={5555555}
/>;

// good
<Hello
  firstName="John" 
  lastName="Smith"
  tel={5555555}
/>;
```

### 5. 小括号

**5.1  如果 JSX 标签是多行的，则需要用小括号包裹，并且小括号需要换行。eslint: [react/jsx-wrap-multilines](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md)**

```jsx
/* react/jsx-wrap-multilines parens-new-line */
// bad
const hello = <div>
  <p>Hello</p>
</div>;

const hello = (<div>
  <p>Hello</p>
</div>);

// good
const hello = (
  <div>
    <p>Hello</p>
  </div>
);
```

### 6. 标签

**6.1 没有子组件的标签需要写成自闭合标签。eslint: [react/self-closing-comp](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md)**

避免不必要的额外关闭标签，代码更简洁。

```jsx
// bad
const HelloJohn = <Hello name="John"></Hello>;
const HelloJohnCompound = <Hello.Compound name="John"></Hello.Compound>;

// good
const HelloJohn = <Hello name="John" />;
const HelloJohnCompound = <Hello.Compound name="John" />;
```

**6.2 标签属性写成多行时，结束标签另起一行，并且结束标签和开始标签对齐。eslint: [react/jsx-closing-bracket-location](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md)**

```jsx
// bad
<Hello
  lastName="Smith"
  firstName="John" />;

<Hello
  lastName="Smith"
  firstName="John"
  />;

// good
<Hello firstName="John" lastName="Smith" />;

<Hello
  firstName="John"
  lastName="Smith"
/>;
```

## 语言特性

### 1. 方法

**1.1 生命周期方法不应该使用箭头函数，而是原型上的方法。eslint: [react/no-arrow-function-lifecycle](https://github.com/yannickcr/eslint-plugin-react/blob/e3d3525bf9d2ddbb312e31edc0837293e1b391f5/docs/rules/no-arrow-function-lifecycle.md)**

这使得测试更加困难，应用性能较差（尽管在实践中，性能不会受到影响，因为大多数引擎将高效地进行优化），[参考链接](https://github.com/facebook/react/issues/10810#issuecomment-332067094)。

```jsx
// bad
class Hello extends React.Component {
  render = () => {
    return <div />;
  }
}
const AnotherHello = createReactClass({
  render: () => {
    return <div />;
  },
});

// good
class Hello extends React.Component {
  render() {
    return <div />;
  }
}
const AnotherHello = createReactClass({
  render() {
    return <div />;
  },
});
```

### 2. Props

**3.1 组件 props 值为 true 时，可以忽略其值。eslint: [react/jsx-boolean-value](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md)**

```jsx
// bad
const Hello = <Hello personal={true} />;

// good
const Hello = <Hello personal />;
```

## Hooks

### 1 使用规则

**1.1 只在最顶层调用 Hooks，不要在循环、条件和嵌套函数中调用 Hooks。Ref: [rules of Hooks - only call Hooks at the top level](https://reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level)​**

```jsx
// bad - call Hooks inside conditions
function ComponentWithConditionalHook() {
  if (cond) {
    useConditionalHook();
  }
}

// bad - call Hooks inside loops
function ComponentWithHookInsideLoop() {
  while (cond) {
    useHookInsideLoop();
  }
}

// bad - call Hooks inside callback
function ComponentWithHookInsideCallback() {
  useEffect(() => {
    useHookInsideCallback();
  });
}

// good
function ComponentWithHook() {
  useHook();
}
```

**1.2 Hooks 命名必须以 `use` 开头，小驼峰形式。**

```jsx
// bad
const customHook = () => {}

// good
const useCustomHook = () => {}
```

**1.3 只在 React 函数组件和自定义 Hooks 中调用 Hooks，不能在普通的 JavaScript 函数中调用 Hooks。Ref:[rules of Hooks - only call Hooks from React functions](https://reactjs.org/docs/hooks-rules.html#only-call-hooks-from-react-functions)**

```jsx
// bad - call Hooks inside class componennt
class ClassComponentWithHook extends React.Component {
  render() {
    React.useState();
  }
}

// bad - call Hooks inside normal function
function normalFunctionWithHook() {
  useHookInsideNormalFunction();
}

// good - call Hooks inside function component
function ComponentWithHook() {
  useHook();
}

// good - call Hooks inside custom Hooks
function useHookWithHook() {
  useHook();
}
```

### 2 副作用依赖

**2.1 `useEffect` 及[类似 Hooks](https://github.com/facebook/react/blob/3c1a7ac87c5b4903aa0de02d11bd9ec2590ad598/packages/eslint-plugin-react-hooks/src/ExhaustiveDeps.js#L1518) 需要声明所有依赖。Ref: [exhaustive-deps](https://github.com/facebook/react/issues/14920)**

```jsx
// bad
function MyComponent() {
  const local = {};
  useEffect(() => {
    console.log(local);
  }, []);
}

// good
function MyComponent() {
  const local = {};
  useEffect(() => {
    console.log(local);
  }, [local]);
}
```
