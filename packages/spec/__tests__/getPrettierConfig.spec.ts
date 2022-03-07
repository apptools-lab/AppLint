import fs from 'fs/promises';
import path from 'path';
import prettier from 'prettier';
import { getPrettierConfig } from '../dist';
import type { RuleKey } from '../dist';

const testFixturesDir = path.join(__dirname, '__fixtures__');

describe('getPrettierConfig API', () => {
  test('common', async () => {
    const result = await getPrettierResult('common');
    expect(result).toBeFalsy();
  });

  test('common-ts', async () => {
    const result = await getPrettierResult('common-ts');
    expect(result).toBeFalsy();
  });

  test('react', async () => {
    const result = await getPrettierResult('react');
    expect(result).toBeFalsy();
  });

  test('react-ts', async () => {
    const result = await getPrettierResult('react-ts');
    expect(result).toBeFalsy();
  });

  test('rax', async () => {
    const result = await getPrettierResult('rax');
    expect(result).toBeFalsy();
  });

  test('rax-ts', async () => {
    const result = await getPrettierResult('rax-ts');
    expect(result).toBeFalsy();
  });
});

async function getPrettierResult(rule: RuleKey) {
  const prettierConfig = getPrettierConfig(rule);
  const source = await fs.readFile(path.join(testFixturesDir, 'prettier/index.js'), 'utf-8');
  const result = await prettier.check(source, { ...prettierConfig, parser: 'babel' });
  return result;
}
