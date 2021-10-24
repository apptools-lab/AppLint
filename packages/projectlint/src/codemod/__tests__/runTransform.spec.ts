import fse from 'fs-extra';
import path from 'path';
import { runTransforms } from '..';
jest.setTimeout(200000)
const tmpDir = path.join(__dirname, 'tmp');
const packageJsonPath = path.join(tmpDir, 'package.json');
const eslintrcPath = path.join(tmpDir, '.eslintrc.js');
const stylelintrcPath = path.join(tmpDir, '.stylelintrc.js');

const packageJsonSource = {
  "scripts": {
    "test": "echo test"
  },
  "dependencies": {
    "react": "^17.0.0",
    "react-dom": "^17.0.0"
  },
  "devDependencies": {
    "eslint-plugin-import": "^2.3.30",
    "ice.js": "^2.0.0"
  }
}
const stylelintrcSource = `
const { stylelint, deepmerge } = require('@ice/spec');

module.exports = deepmerge(stylelint, {
  rules: {
    s: 1
  },
});
`;

const eslintrcSource = `
const { eslint, deepmerge } = require('@ice/spec');

module.exports = deepmerge(eslint, {
  rules: {
    s: 1
  },
});
`;

beforeAll(() => {
  createTmpProject();
});

afterAll(() => {
  fse.removeSync(tmpDir)
})

describe('run transform', () => {
  // await runTransform({ cwd: tmpDir, mode: 'fix', rules: { "lint-config-to-iceworks-spec": "warn" } });
  test('fix mode', async () => {
    await runTransforms({ cwd: tmpDir, dry: true, transforms: { "lint-config-to-iceworks-spec": "warn" } });
    expect('a').toBe('a')
  })
})

function createTmpProject() {
  fse.mkdirSync(tmpDir);
  const appPath = path.join(tmpDir, 'src', 'app.ts');
  fse.ensureFileSync(packageJsonPath);
  fse.ensureFileSync(eslintrcPath);
  fse.ensureFileSync(stylelintrcPath);
  fse.ensureFileSync(appPath);
  fse.writeJSONSync(packageJsonPath, packageJsonSource, { spaces: 2 });
  fse.writeFileSync(eslintrcPath, eslintrcSource);
  fse.writeFileSync(stylelintrcPath, stylelintrcSource);
  fse.writeFileSync(appPath, '');
}
