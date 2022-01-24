import path from 'path';
import fse from 'fs-extra';
import { ESLint } from '../src/index';
import getFiles from './utils/getFiles';

describe('ESLint', () => {
  const fixturesDir = path.join(__dirname, '..', '__testFixtures__');
  const files = getFiles(fixturesDir);

  const eslint = new ESLint({
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
    const { data } = await eslint.scan();
    expect(data.length).toBe(1);
    expect(data[0].errorCount).toBe(1);
    expect(data[0].fixableErrorCount).toBe(1);
  });

  test('fix', async () => {
    const { data } = await eslint.fix();
    expect(data.length).toBe(1);
    expect(data[0].errorCount).toBe(0);
    expect(data[0].fixableErrorCount).toBe(0);
  });
});
