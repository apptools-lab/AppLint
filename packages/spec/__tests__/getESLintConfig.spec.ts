import { ESLint } from 'eslint';
import path from 'path';
import { getESLintConfig } from '../dist';

describe('getESLintConfig API', () => {
  test('common', async () => {
    const eslintConfig = getESLintConfig('common');
    const eslint = new ESLint({
      baseConfig: eslintConfig,
      useEslintrc: false,
    });
    const results = await eslint.lintFiles([path.resolve('__testFixtures__/eslint/index.js')]);
    expect(results.length).toBe(1);
  });

  test('common-ts', async () => {
    const eslintConfig = getESLintConfig('common-ts');
    const eslint = new ESLint({
      baseConfig: eslintConfig,
      useEslintrc: false,
    });
    const results = await eslint.lintFiles([path.resolve('__testFixtures__/eslint/index.ts')]);
    expect(results.length).toBe(1);
  });

  test('react', async () => {
    const eslintConfig = getESLintConfig('react');
    const eslint = new ESLint({
      baseConfig: eslintConfig,
      useEslintrc: false,
    });
    const results = await eslint.lintFiles([path.resolve('__testFixtures__/eslint/index.jsx')]);
    expect(results.length).toBe(1);
  });

  test('react-ts', async () => {
    const eslintConfig = getESLintConfig('react-ts');
    const eslint = new ESLint({
      baseConfig: eslintConfig,
      useEslintrc: false,
    });
    const results = await eslint.lintFiles([path.resolve('__testFixtures__/eslint/index.tsx')]);
    expect(results.length).toBe(1);
  });

  test('rax', async () => {
    const eslintConfig = getESLintConfig('react');
    const eslint = new ESLint({
      baseConfig: eslintConfig,
      useEslintrc: false,
    });
    const results = await eslint.lintFiles([path.resolve('__testFixtures__/eslint/index.jsx')]);
    expect(results.length).toBe(1);
  });

  test('rax-ts', async () => {
    const eslintConfig = getESLintConfig('react-ts');
    const eslint = new ESLint({
      baseConfig: eslintConfig,
      useEslintrc: false,
    });
    const results = await eslint.lintFiles([path.resolve('__testFixtures__/eslint/index.tsx')]);
    expect(results.length).toBe(1);
  });
});
