import { describe, test, expect } from 'vitest';
import commitlint from '@commitlint/lint';
import loadCommitlint from '@commitlint/load';
import { getCommitlintConfig } from '../dist';
import type { RuleKey } from '../dist';

describe('getCommitlintConfig', () => {
  test('common', async () => {
    const commitlintResult = await getCommitlintResult('common');
    expect(commitlintResult.errors.length).toBe(2);
  });

  test('common-ts', async () => {
    const commitlintResult = await getCommitlintResult('common-ts');
    expect(commitlintResult.errors.length).toBe(2);
  });

  test('react', async () => {
    const commitlintResult = await getCommitlintResult('react');
    expect(commitlintResult.errors.length).toBe(2);
  });

  test('react-ts', async () => {
    const commitlintResult = await getCommitlintResult('react-ts');
    expect(commitlintResult.errors.length).toBe(2);
  });

  test('rax', async () => {
    const commitlintResult = await getCommitlintResult('rax');
    expect(commitlintResult.errors.length).toBe(2);
  });

  test('rax-ts', async () => {
    const commitlintResult = await getCommitlintResult('rax-ts');
    expect(commitlintResult.errors.length).toBe(2);
  });
});

async function getCommitlintResult(rule: RuleKey) {
  const commitlintConfig = await loadCommitlint(getCommitlintConfig(rule));

  return await commitlint('foo:bar', commitlintConfig.rules);
}