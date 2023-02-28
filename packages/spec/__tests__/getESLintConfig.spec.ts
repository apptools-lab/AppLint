import { describe, test, expect } from 'vitest';
import path from 'path';
import { ESLint } from 'eslint';
import { getESLintConfig } from '../dist';
import type { RuleKey } from '../dist';

const testFixturesDir = path.join(__dirname, '__fixtures__');

describe('getESLintConfig API', () => {
  test('common', async () => {
    const results = await getESLintResults('common', [path.join(testFixturesDir, 'eslint/index.js')]);
    expect(results.length).toBe(1);
    expect(results[0].messages.length).toBe(2);
  });

  test('common-ts', async () => {
    const results = await getESLintResults('common-ts', [path.join(testFixturesDir, 'eslint/index.ts')]);
    expect(results[0].messages.length).toBe(4);
  });

  test('common-ts-strict', async () => {
    const results = await getESLintResults('common-ts-strict', [path.join(testFixturesDir, 'eslint/index.ts')]);
    expect(results[0].messages.length).toBe(2);
  });

  test('react', async () => {
    const results = await getESLintResults('react', [path.join(testFixturesDir, 'eslint/index.jsx')]);
    expect(results[0].messages.length).toBe(3);
  });

  test('react-ts', async () => {
    const results = await getESLintResults('react-ts', [path.join(testFixturesDir, 'eslint/index.tsx')]);
    expect(results[0].messages.length).toBe(5);
  });

  test('react-ts-strict', async () => {
    const results = await getESLintResults('react-ts-strict', [path.join(testFixturesDir, 'eslint/index.tsx')]);
    expect(results.length).toBe(1);
    expect(results[0].messages.length).toBe(4);
  });

  test('rax', async () => {
    const results = await getESLintResults('rax', [path.join(testFixturesDir, 'eslint/index.jsx')]);
    expect(results.length).toBe(1);
    expect(results[0].messages.length).toBe(2);
  });

  test('rax-ts', async () => {
    const results = await getESLintResults('rax-ts', [path.join(testFixturesDir, 'eslint/index.tsx')]);
    expect(results.length).toBe(1);
    expect(results[0].messages.length).toBe(4);
  });

  test('rax-ts-strict', async () => {
    const results = await getESLintResults('rax-ts-strict', [path.join(testFixturesDir, 'eslint/index.tsx')]);
    expect(results.length).toBe(1);
    expect(results[0].messages.length).toBe(3);
  });
});

async function getESLintResults(rule: RuleKey, files: string[]) {
  const eslintConfig = getESLintConfig(rule);
  const eslint = new ESLint({
    baseConfig: eslintConfig,
    useEslintrc: false,
    ignore: false,
  });
  const results = await eslint.lintFiles(files);
  return results;
}