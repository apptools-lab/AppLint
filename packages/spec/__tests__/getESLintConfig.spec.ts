import { ESLint } from 'eslint';
import path from 'path';
import { getESLintConfig } from '../dist';
import type { RuleKey } from '../dist';

describe('getESLintConfig API', () => {
  test('common', async () => {
    const results = await getESLintResults('common', [path.resolve('__testFixtures__/eslint/index.js')]);
    expect(results.length).toBe(1);
  });

  test('common-ts', async () => {
    const results = await getESLintResults('common-ts', [path.resolve('__testFixtures__/eslint/index.ts')]);
    expect(results.length).toBe(1);
  });

  test('react', async () => {
    const results = await getESLintResults('react', [path.resolve('__testFixtures__/eslint/index.jsx')]);
    expect(results.length).toBe(1);
  });

  test('react-ts', async () => {
    const results = await getESLintResults('react-ts', [path.resolve('__testFixtures__/eslint/index.tsx')]);
    expect(results.length).toBe(1);
  });

  test('rax', async () => {
    const results = await getESLintResults('rax', [path.resolve('__testFixtures__/eslint/index.jsx')]);
    expect(results.length).toBe(1);
  });

  test('rax-ts', async () => {
    const results = await getESLintResults('rax-ts', [path.resolve('__testFixtures__/eslint/index.tsx')]);
    expect(results.length).toBe(1);
  });
});

async function getESLintResults(rule: RuleKey, files: string[]) {
  const eslintConfig = getESLintConfig(rule);
  const eslint = new ESLint({
    baseConfig: eslintConfig,
    useEslintrc: false,
  });
  const results = await eslint.lintFiles(files);
  return results;
}