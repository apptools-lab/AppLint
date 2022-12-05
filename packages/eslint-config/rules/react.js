module.exports = {
  plugins: ['react', 'react-hooks'],

  rules: {
    /**
     *  React 规则
     * @link https://github.com/yannickcr/eslint-plugin-react
     */
    // 对 no-unused-vars 规则的补充，防止 React 被标记为未使用
    'react/jsx-uses-react': 'error',

    // 对 no-unused-vars 规则的补充，防止 React 变量被标记为未使用
    'react/jsx-uses-vars': 'error',

    // JSX 语法使用两个空格缩进
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],

    // JSX 属性大括号内部两侧无空格
    'react/jsx-curly-spacing': 'error',

    // JSX 属性的等号两边不加空格
    'react/jsx-equals-spacing': 'error',

    // JSX 行内属性之间只有一个空格
    'react/jsx-props-no-multi-spaces': 'error',

    // 检查 JSX 元素中的开始和结束标签的空格
    // 1. 闭合斜线左边不允许有空格 </，闭合斜线右边不允许有空格 />
    // 2. 自闭合标签中闭合斜线左边有空格，右边无空格 <xx />
    // 3. 开始标签前不允许有空格 <a>
    'react/jsx-tag-spacing': 'error',

    // 当大括号中的JSX 属性和表达式占用多行时，则大括号需要换行，如果是单行，则不需要换行
    'react/jsx-curly-newline': 'error',

    // 标签有多个属性且换行，每个属性都独占一行
    'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],

    // 如果JSX标签占用多行并且有多个属性，则第一个属性应始终放在新行上
    'react/jsx-first-prop-new-line': 'error',

    // 如果 JSX 标签是多行的，则需要用小括号包裹，并且小括号需要换行
    'react/jsx-wrap-multilines': 'error',

    // 没有子组件的标签需要写成自闭合标签
    'react/self-closing-comp': 'error',

    // 标签属性写成多行时，结束标签另起一行，并且与包含开标签的行对齐
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],

    // 生命周期方法不应该使用箭头函数，而是原型上的方法
    'react/no-arrow-function-lifecycle': 'error',

    // 组件 props 值为 true 时，可以忽略其值
    'react/jsx-boolean-value': 'error',

    /**
     * React Hooks 规则
     * @link https://www.npmjs.com/package/eslint-plugin-react-hooks
     * @link https://reactjs.org/docs/hooks-rules.html
     */
    // hooks 调用规则
    'react-hooks/rules-of-hooks': 'warn',

    // useEffect 及类似 Hooks 需要声明其所有依赖
    'react-hooks/exhaustive-deps': 'warn',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json'],
      },
    },
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
};