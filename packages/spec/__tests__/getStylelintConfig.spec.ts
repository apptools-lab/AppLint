import stylelint from 'stylelint';
import path from 'path';
import { getStylelintConfig } from '../dist';
import type { RuleKey } from '../dist';

describe('getStylelintConfig API', () => {
  test('common', async () => {
    const lintResult = await getLintResult('common');
    expect(lintResult.results.length).toBe(1);
  });

  test('common-ts', async () => {
    const lintResult = await getLintResult('common-ts');
    expect(lintResult.results.length).toBe(1);
  });

  test('react', async () => {
    const lintResult = await getLintResult('react');
    expect(lintResult.results.length).toBe(1);
  });

  test('react-ts', async () => {
    const lintResult = await getLintResult('react-ts');
    expect(lintResult.results.length).toBe(1);
  });

  test('rax', async () => {
    const lintResult = await getLintResult('rax');
    expect(lintResult.results.length).toBe(1);
  });

  test('rax-ts', async () => {
    const lintResult = await getLintResult('rax-ts');
    expect(lintResult.results.length).toBe(1);
  });
});

async function getLintResult(rule: RuleKey) {
  const stylelintConfig = getStylelintConfig(rule);
  const lintResult = await stylelint.lint({
    config: stylelintConfig,
    files: [path.resolve('__testFixtures__/stylelint/index.css')],
  });
  return lintResult;
}