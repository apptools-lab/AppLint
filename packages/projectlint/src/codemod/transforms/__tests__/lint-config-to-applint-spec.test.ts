import { expect, test } from 'vitest';
import path from 'path';
import fse from 'fs-extra';
// @ts-ignore jscodeshift error
import { applyTransform } from 'jscodeshift/dist/testUtils';
import transform from '../../transforms/lint-config-to-applint-spec';

const fixturesDir = path.join(__dirname, '..', '__fixtures__/lint-config-to-applint-spec');

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
    const packageJSON = JSON.parse(output);
    const { devDependencies = {}, scripts = {} } = packageJSON;
    expect(Object.keys(devDependencies).includes('@applint/spec')).toBeTruthy();
    expect(Object.keys(devDependencies).includes('@iceworks/spec')).toBeFalsy();

    const eslintScriptExists = Object.keys(scripts).some(key => scripts[key].includes('eslint'));
    const stylelintScriptExists = Object.keys(scripts).some(key => scripts[key].includes('stylelint'));
    expect(eslintScriptExists).toBeTruthy();
    expect(stylelintScriptExists).toBeTruthy();

    expect(devDependencies['eslint']).not.toBeUndefined();
    expect(devDependencies['stylelint']).not.toBeUndefined();

    expect(fse.pathExistsSync(path.join(tmpFixtureDir, '.eslintignore'))).toBeTruthy();
    expect(fse.pathExistsSync(path.join(tmpFixtureDir, '.stylelintignore'))).toBeTruthy();

    expect(fse.pathExistsSync(path.join(tmpFixtureDir, '.eslintrc.js'))).toBeTruthy();
    expect(fse.pathExistsSync(path.join(tmpFixtureDir, '.stylelintrc.js'))).toBeTruthy();
  } finally {
    await fse.remove(tmpFixtureDir);
  }
});
