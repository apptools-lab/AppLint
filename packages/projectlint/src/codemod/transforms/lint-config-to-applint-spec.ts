import path from 'path';
import type { API, FileInfo, Options } from 'jscodeshift';

const packageName = '@applint/spec';
const packageVersion = '^1.0.0';

interface PackageJSON {
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  scripts?: Record<string, string>;
}

export default function (fileInfo: FileInfo, api: API, options: Options) {
  const { path: filePath, source } = fileInfo;
  const dir = path.dirname(filePath);
  const basename = path.basename(filePath);

  if (basename !== 'package.json') {
    return source;
  }

  const packageJSON = JSON.parse(source);
  const newPackageJSON = addAppLintSpecToDependency(packageJSON);

  return JSON.stringify(newPackageJSON);
}

function addAppLintSpecToDependency(packageJSON: PackageJSON): PackageJSON {
  const deprecatedDependencies = ['@iceworks/spec', '@ice/spec'];
  const { dependencies = {}, devDependencies = {} } = packageJSON;
  if (packageName in dependencies || packageName in devDependencies) {
    // if @applint/spec has existed, no need to modify devDependencies
    return newPackageJSON;
  }

  for (const deprecatedDependency of deprecatedDependencies) {
    const dependencyObj = { dependencies, devDependencies };
    for (const key in dependencyObj) {
      const currentDependencies = dependencyObj[key];
      if (deprecatedDependency in currentDependencies) {
        delete currentDependencies[deprecatedDependency];
      }
    }
  }

  const newPackageJSON = { ...packageJSON };
  newPackageJSON['devDependencies'] = { ...devDependencies, [packageName]: packageVersion };

  return newPackageJSON;
}