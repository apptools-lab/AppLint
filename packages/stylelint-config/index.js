const miniappTags = require('./miniapp-tags');

module.exports = {
  defaultSeverity: 'error',

  plugins: ['stylelint-scss'],

  rules: {
    /**
     * Possible errors
     * @link https://stylelint.io/user-guide/rules/list#possible-errors
     */

    // 避免出现额外的分号
    'no-extra-semicolons': true,

    // 小程序场景下选择器
    'selector-type-no-unknown': [
      true,
      {
        ignore: ['custom-elements'],
        ignoreTypes: miniappTags,
      },
    ],

    /**
     * Limit language features
     * @link https://stylelint.io/user-guide/rules/list#limit-language-features
     */

    // 不允许属性存在冗余值
    'shorthand-property-no-redundant-values': true,

    // 长度值是 0 时，省略长度单位
    'length-zero-no-unit': true,

    // 限制选择器之间相邻空行的数量为 0
    'selector-max-empty-lines': 0,

    /**
     * Stylistic issues
     * @link https://stylelint.io/user-guide/rules/list#stylistic-issues
     */
    // 统一使用2个空格缩进
    indentation: 2,
    // 所有声明都应该以分号结尾，不能省略
    'declaration-block-trailing-semicolon': 'always',

    // 函数的逗号之后必须有一个空格，逗号前没有空格
    'function-comma-space-after': 'always',
    'function-comma-space-before': 'never',

    // 函数之间应该有空格隔开
    'function-whitespace-after': 'always',

    // 属性值的逗号前面没有空格，后面有空格
    'value-list-comma-space-before': 'never',
    'value-list-comma-space-after': 'always',

    // 属性名和 `:` 之前无空格，`:` 和属性值之间保留一个空格
    'declaration-colon-space-before': 'never',
    'declaration-colon-space-after': 'always',

    // 选择器和大括号之间需要一个空格
    'block-opening-brace-space-before': 'always',

    // @media 括号中的冒号后面需要一个空格，前面不需要空格
    'media-feature-colon-space-before': 'never',
    'media-feature-colon-space-after': 'always',

    // @media 的范围操作符前后需要一个空格
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',

    // 注释内容和注释符之间留有一个空格
    'comment-whitespace-inside': 'always',

    // 函数括号内侧不能有空白符
    'function-parentheses-space-inside': 'never',

    // @media 中，括号内不允许有空白符
    'media-feature-parentheses-space-inside': 'never',

    // 在组合选择器之间必须有一个空格
    'selector-combinator-space-before': 'always',
    'selector-combinator-space-after': 'always',

    // 在块的右括号后要求有换行
    'block-closing-brace-newline-after': 'always',

    // 在@规则的分号后需要换行符
    'at-rule-semicolon-newline-after': 'always',

    // 在多行块中，开大括号后必须始终有一个换行符，闭大括号之前必须有一个换行符
    'block-opening-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always',

    // 在多行块中，声明块的分号之后必须有一个换行符
    'declaration-block-semicolon-newline-after': 'always',

    // 小于 1 的值，小数点前需要有 0
    'number-leading-zero': 'always',

    // 在数字中不允许尾随 0
    'number-no-trailing-zeros': true,

    // 单位统一为小写
    'unit-case': 'lower',

    // @media 属性名使用小写字母
    'media-feature-name-case': 'lower',

    // 伪类选择器使用小写字母
    'selector-pseudo-class-case': 'lower',

    // 伪元素选择器使用小写字母
    'selector-pseudo-element-case': 'lower',

    // 类型选择器使用小写字母
    'selector-type-case': 'lower',

    // @ 规则使用小写字母
    'at-rule-name-case': 'lower',

    // 函数名是小写字母
    'function-name-case': 'lower',

    // 指定 CSS 属性值为小写
    'value-keyword-case': 'lower',

    // 统一 CSS 属性为小写
    'property-case': 'lower',

    // 指定 16 进制值使用小写字母（小写字母更容易区分）
    'color-hex-case': 'lower',

    // 指定 16 进制颜色为简写
    'color-hex-length': 'short',

    /**
     * stylelint-scss rules
     * @link https://www.npmjs.com/package/stylelint-scss
     */
    'scss/double-slash-comment-whitespace-inside': 'always',
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
  // stylelint 14 require postcss-less and postcss-scss
  customSyntax: 'postcss-scss',
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['**/*.less'],
      customSyntax: 'postcss-less',
    },
  ],
};
