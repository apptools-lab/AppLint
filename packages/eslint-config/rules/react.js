module.exports = {
  plugins: ['react', 'react-hooks'],
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    // 防止 React 组件定义中缺少 displayName
    'react/display-name': ['off', { ignoreTranspilerName: false }],

    // 禁止将 children 作为属性名
    'react/no-children-prop': 'warn',

    // 禁止在有子节点的组件或 DOM 元素中使用 dangerouslySetInnerHTML 属性
    'react/no-danger-with-children': 'warn',

    // 禁止使用已经废弃的方法
    'react/no-deprecated': 'warn',

    // 禁止直接使用 this.state 改变状态
    'react/no-direct-mutation-state': 'warn',

    // 不要使用 findDOMNode，严格模式下已经弃用
    'react/no-find-dom-node': 'warn',

    // isMounted 已被废弃
    'react/no-is-mounted': 'warn',

    // 禁止使用 ReactDOM.render 的返回值
    'react/no-render-return-value': 'warn',

    // 使用 ref 回调函数或 React.createRef()，不要使用字符串
    'react/no-string-refs': 'warn',

    // 标签中禁止出现无意义字符，比如 > " } '
    'react/no-unescaped-entities': 'warn',

    // prop 需要 propTypes 验证类型
    'react/prop-types': 'warn',

    // 防止 JSX 中未引入 React
    'react/react-in-jsx-scope': 'off',

    // render 方法必须要有返回值
    'react/require-render-return': 'warn',

    // JSX 语法检查数组和迭代器的 key
    'react/jsx-key': 'warn',

    // JSX 语句的文本节点中不要使用注释字符串（例如，以//或/ *开头）
    'react/jsx-no-comment-textnodes': 'warn',

    //  禁止使用未声明的组件
    'react/jsx-no-undef': 'warn',

    // 禁止出现重复的 props
    'react/jsx-no-duplicate-props': 'warn',

    // 防止 react 被标记为未使用
    'react/jsx-uses-react': 'warn',

    // 防止 JSX 中使用的变量被标记为未使用
    'react/jsx-uses-vars': 'warn',

    // hooks 调用规则
    'react-hooks/rules-of-hooks': 'warn',
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