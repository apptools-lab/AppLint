import stylelint from 'stylelint';
import path from 'path';
import { getStylelintConfig } from '../dist';
import type { RuleKey } from '../dist';

const testFixturesDir = path.join(__dirname, '__fixtures__');

describe('getStylelintConfig API', () => {
  test('common', async () => {
    const lintResult = await getStylelintResult('common');
    expect(lintResult.results.length).toBe(1);
  });

  test('common-ts', async () => {
    const lintResult = await getStylelintResult('common-ts');
    expect(lintResult.results.length).toBe(1);
  });

  test('react', async () => {
    const lintResult = await getStylelintResult('react');
    expect(lintResult.results.length).toBe(1);
  });

  test('react-ts', async () => {
    const lintResult = await getStylelintResult('react-ts');
    expect(lintResult.results.length).toBe(1);
  });

  test('rax', async () => {
    const lintResult = await getStylelintResult('rax');
    expect(lintResult.results.length).toBe(1);
  });

  test('rax-ts', async () => {
    const lintResult = await getStylelintResult('rax-ts');
    expect(lintResult.results.length).toBe(1);
  });
});

async function getStylelintResult(rule: RuleKey) {
  const stylelintConfig = getStylelintConfig(rule);
  const lintResult = await stylelint.lint({
    config: stylelintConfig,
    files: [path.join(testFixturesDir, 'stylelint/index.css')],
  });
  return lintResult;
}