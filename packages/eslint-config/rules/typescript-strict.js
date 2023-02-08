module.exports = {
  parserOptions: {
    project: './tsconfig.json',
    createDefaultProgram: true,
  },
  rules: {
    /**
     * 不强制数组类型，[] 与 Array 均可，如 string[] 与 Array<string>
     * 可选：可设置为仅使用 [] 或者 Array，也可以设置为对于原始类型使用 []，对于对象使用 Array
     * fixable
     */
    '@typescript-eslint/array-type': ['off'],
    /**
     * 只能 await promise(like) 的值，不允许 await 普通函数
     */
    '@typescript-eslint/await-thenable': ['error'],
    /**
     * 需要描述为什么这里使用了 @ts 指令
     * 目前 @ts-ignore、@ts-nocheck、@ts-expect-error 均需要在提供描述的情况下使用
     * 如：// @ts-ignore: 这里的类型确实判断不出来...
     */
    '@typescript-eslint/ban-ts-comment': [
      'warn',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': 'allow-with-description',
        minimumDescriptionLength: 3,
      },
    ],
    /**
     * 不允许使用 Function 与 {} 来作为类型标注
     * 对于 Function：你应该提供详细的参数、返回值结构
     * 对于 {}：任何数组类型都能 extends {}，甚至 number 都行
     * fixable
     */
    '@typescript-eslint/ban-types': [
      'warn',
      {
        types: {
          Function: {
            message: 'Donot use Function as type!',
            fixWith: '(...args: any[]) => any',
          },
          '{}': {
            message: 'Donot use empty object as type!',
            fixWith: 'Record<string, any>',
          },
          Object: {
            message: 'Donot use top-level Object as type!',
            fixWith: 'Record<string, any>',
          },
        },
      },
    ],
    'brace-style': 'off',
    // fixable
    '@typescript-eslint/brace-style': ['error'],
    /**
     * 统一使用 as 做类型断言（或常量断言） 而不是 <>
     * const array = [1, 2, 3] as const √
     * const array = <const>[1, 2, 3] ×
     */
    '@typescript-eslint/consistent-type-assertions': [
      'warn',
      {
        assertionStyle: 'as',
        // 允许对对象字面量类型做断言 const x = {} as IObjetcType
        objectLiteralTypeAssertions: 'allow',
      },
    ],
    /**
     * 只允许使用 interface 作为对象类型结构
     * type 只应该用来声明函数、工具类型等
     * fixable
     */
    '@typescript-eslint/consistent-type-definitions': ['off'],
    /**
     *  对于类型导入统一使用 import type
     *  如：import type { SomeType } from 'xxx';
     * 为什么：使用 import type，由于类型空间与值空间是独立的，不会存在循环导入的问题
     * fixable
     */
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
      },
    ],
    /**
     * 需要把有默认值的参数放在最后一个
     * function arg (arg1: string, arg2 = 1){}
     */
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': ['error'],
    /**
     * 显式声明类成员的可访问性，即使是 public
     * rquire explicit class member modifiers
     * fixable
     */
    '@typescript-eslint/explicit-member-accessibility': ['off'],
    /**
     * 导出的函数与类方法的参数、返回值都必须显式指定
     * Require explicit return and argument types on exported functions' and classes' public class methods
     */
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    'lines-between-class-members': 'off',
    // fixable
    '@typescript-eslint/lines-between-class-members': ['error'],
    // 类成员的分隔需要间隔行!
    // fixable
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
        multilineDetection: 'brackets',
      },
    ],
    /**
     * 方法签名的声明方式有 prop 与 function 两种，区别如下：
     * method
      interface T1 {
        func(arg: string): number;
      }

      property
      interface T2 {
        func: (arg: string) => number;
      }
      fixable
     */
    '@typescript-eslint/method-signature-style': ['warn', 'property'],
    /**
     * 不允许使用难以分辨的非空断言（如与 !== 一起）
     * const isEqualsBar = foo.bar! == 'hello';
     * 在这种情况下，你应该使用类型断言
     * fixable
     */
    '@typescript-eslint/no-confusing-non-null-assertion': ['error'],
    /**
     * 不允许 return console.log 这种空表达式
     * fixable
     */
    '@typescript-eslint/no-confusing-void-expression': [
      'warn',
      // allow arrow shorthand like promise.then(value => window.postMessage(value));
      // 箭头函数的缩写还是可以的！
      { ignoreArrowShorthand: true },
    ],
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': ['error'],
    // 不允许重复导入（类型导入除外）
    'no-duplicate-imports': 'off',
    '@typescript-eslint/no-duplicate-imports': ['error'],
    /**
     * 警告动态的删除对象成员行为
     * delete container[name];
     */
    '@typescript-eslint/no-dynamic-delete': ['warn'],
    /**
     * 空函数 如 noop: () => {}
     * 在部分情况下空函数是有作用的，如函数类型属性的默认值、mock stub 等
     */
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    /**
     * 不允许空接口，但在单继承的情况下允许
     * interface Foo extends Bar {}
     * 这个修正是啥样的？
     */
    '@typescript-eslint/no-empty-interface': [
      'off',
      {
        allowSingleExtends: true,
      },
    ],
    /**
     * 不允许显式any，这个需要重点讨论下
     * - 可以切换为 unknown + as 的形式，即在真正使用到的地方再显式的断言为需要类型
     * fixable
     */
    '@typescript-eslint/no-explicit-any': [
      'off',
      {
        fixToUnknown: false,
        ignoreRestArgs: true,
      },
    ],
    // 不允许无效的非空断言，如对不会为空的类型使用非空断言
    // fixable
    '@typescript-eslint/no-extra-non-null-assertion': ['error'],
    // 使用 for of 遍历数组，而不是 for 循环
    '@typescript-eslint/no-for-in-array': ['error'],
    'no-loss-of-precision': 'off',
    // 精度
    '@typescript-eslint/no-loss-of-precision': ['error'],
    // 能够推导的类型不需要手动声明，但在函数参数、类属性中允许
    '@typescript-eslint/no-inferrable-types': [
      'warn',
      {
        ignoreParameters: true,
        ignoreProperties: true,
      },
    ],
    // 不要使用 foo.bar! ?? baz 这种形式，这样使用 ?? 就没有意义了
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': ['error'],
    // 不要使用 foo?.bar()!
    '@typescript-eslint/no-non-null-asserted-optional-chain': ['error'],
    // 非空断言在大部分情况下还是需要的
    '@typescript-eslint/no-non-null-assertion': ['off'],
    'no-restricted-imports': 'off',
    // 禁止某些导入，目前还没遇到需要的
    '@typescript-eslint/no-restricted-imports': 'off',
    '@typescript-eslint/no-this-alias': [
      'error',
      {
        allowDestructuring: true,
        // "allowedNames": ["self"] // Allow `const self = this`; `[]` by default
      },
    ],
    // 不允许 throw 一个字符串，如 throw 'error'!
    'no-throw-literal': 'off',
    '@typescript-eslint/no-throw-literal': ['error'],
    /**
     * 不需要使用不必要的类型参数，如泛型已经有默认值，还传入与默认值相同的泛型参数
     * function f<T = number>() {}
     * f<number>();
     * fixable
     */
    '@typescript-eslint/no-unnecessary-type-arguments': ['error'],
    // 不需要不必要的类型断言：const a:string = 'foo' as string;
    // fixable
    '@typescript-eslint/no-unnecessary-type-assertion': ['error'],
    // 不需要不必要的类型约束，如 extends unknown
    // fixable
    '@typescript-eslint/no-unnecessary-type-constraint': ['error'],
    // 以下三个，就目前来看过于严格了
    // "@typescript-eslint/no-unsafe-assignment": ["error"],
    // "@typescript-eslint/no-unsafe-member-access": ["error"],
    // "@typescript-eslint/no-unsafe-return": ["error"],
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': ['error'],
    // 对于 string | undefined 这种，使用非空断言而不是 as string
    '@typescript-eslint/non-nullable-type-assertion-style': ['error'],
    // 不允许未使用的变量、参数
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        // check all(global) variables
        vars: 'local',
        // https://eslint.org/docs/rules/no-unused-vars#options
        args: 'none',
        // allow rest omit operator
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_',
        // allow _arg
        argsIgnorePattern: '^_',
        // catch statement
        caughtErrors: 'none',
      },
    ],
    '@typescript-eslint/no-require-imports': 'off',
    // 类似于类型断言，使用 as const 做常量断言，而不是 <const>
    // fixable
    '@typescript-eslint/prefer-as-const': ['off'],
    // interface 必须是 I 开头，便于区分
    '@typescript-eslint/naming-convention': 'off',
    // 使用 for of 遍历
    '@typescript-eslint/prefer-for-of': ['warn'],
    // 使用字面量作为枚举成员值而避免引用变量
    // UPDATE: TS 5.0 对枚举支持进一步增强了
    '@typescript-eslint/prefer-literal-enum-member': 'off',
    // 使用 ?? 而不是 ||
    '@typescript-eslint/prefer-nullish-coalescing': ['warn'],
    // 使用 ?. 而不是 &&
    '@typescript-eslint/prefer-optional-chain': ['warn'],
    // 为 reduce 方法传入显式的类型参数，因为通常 reduce 方法的初始值会是 [] 或者 {} 这种，没法推导出来结果类型
    '@typescript-eslint/prefer-reduce-type-parameter': ['warn'],
    // 使用 @ts-expect-error 而不是 @ts-ignore
    // fixable
    '@typescript-eslint/prefer-ts-expect-error': ['error'],
    // 返回 Promise 的方法、函数，必须被声明为 async
    // fixable
    '@typescript-eslint/promise-function-async': [
      'error',
      {
        allowedPromiseNames: ['Thenable'],
        checkArrowFunctions: false,
        checkFunctionDeclarations: true,
        checkFunctionExpressions: true,
        checkMethodDeclarations: true,
      },
    ],
    // 在 switch 语句中使用联合类型时需要考虑到其所有情况
    '@typescript-eslint/switch-exhaustiveness-check': ['error'],
    // 不允许使用三斜线指令
    '@typescript-eslint/triple-slash-reference': ['off'],
    '@typescript-eslint/type-annotation-spacing': ['error'],
    'react/no-unknown-property': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'id-length': 'off',
    camelcase: 'off',
    'no-negated-condition': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'off',
    ...require('./prettier').rules,
  },
};
