import { describe, test, expect, afterAll } from 'vitest';
import path from 'path';
import fse from 'fs-extra';
import { Stylelint } from '../src/index';
import getFiles from './utils/getFiles';

describe('Stylelint', () => {
  const fixturesDir = path.join(__dirname, '__fixtures__');
  const files = getFiles(fixturesDir);

  const stylelint = new Stylelint({
    directory: fixturesDir,
    files: files,
    ruleKey: 'react-ts',
  });

  afterAll(() => {
    // recover the origin file content
    files.forEach((file) => {
      fse.writeFileSync(file.path, file.source);
    });
  });

  test('scan', async () => {
    const { data } = await stylelint.scan();
    const { errored, results } = data;
    expect(errored).toBeTruthy();
    expect(results.length).toBe(2);
    expect(results[0].warnings.length).toBe(2);
  });

  test('fix', async () => {
    const { data } = await stylelint.fix();
    const { errored, results } = data;

    expect(errored).toBeFalsy();
    expect(results.length).toBe(2);
    expect(results[0].warnings.length).toBe(0);
  });
});
