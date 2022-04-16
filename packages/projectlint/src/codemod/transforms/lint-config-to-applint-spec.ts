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
  for (const deprecatedDependency of deprecatedDependencies) {
    if (deprecatedDependency in dependencies) {
      delete dependencies[deprecatedDependency];
      dependencies[packageName] = packageVersion;
      packageJSON.dependencies = dependencies;
    } else if (deprecatedDependency in devDependencies) {
      delete devDependencies[deprecatedDependency];
      devDependencies[packageName] = packageVersion;
      packageJSON.devDependencies = devDependencies;
    }
  }

  return packageJSON;
}