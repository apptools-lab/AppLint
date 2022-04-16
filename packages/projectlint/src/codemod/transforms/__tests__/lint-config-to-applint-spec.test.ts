import { expect, test } from 'vitest';
import path from 'path';
import fse from 'fs-extra';
import { applyTransform } from 'jscodeshift/dist/testUtils';
import transform from '../../transforms/lint-config-to-applint-spec';

const fixturesDir = path.join(__dirname, '..', '__testfixtures__/lint-config-to-applint-spec');

test('transform @iceworks/spec to @applint/spec', async () => {
  const fixtureDir = path.join(fixturesDir, 'iceworks-spec-config');
  const tmpFixtureDir = `${fixtureDir}-tmp`;
  await fse.copy(fixtureDir, tmpFixtureDir);
  const packageJsonPath = path.join(tmpFixtureDir, 'package.json');
  const input = await fse.readFile(packageJsonPath, 'utf-8');

  try {
    const output = applyTransform(
      transform,
      {},
      {
        path: packageJsonPath,
        source: input,
      },
    );
    expect(output).toContain('@applint/spec');
    expect(output).not.toContain('@iceworks/spec');
  } finally {
    await fse.remove(tmpFixtureDir);
  }
});
