import fse from 'fs-extra';
import path from 'path';
import { glob } from 'glob';

interface IFileInfo {
  path: string;
  source: string;
  // lines of code
  LoC: number;
}

function getFileInfo(filePath: string, directory?: string): IFileInfo {
  const file = directory ? path.join(directory, filePath) : filePath;

  let source = fse.readFileSync(file).toString().trim();

  // if begins with shebang
  if (source[0] === '#' && source[1] === '!') {
    source = `//${source}`;
  }

  return {
    path: file,
    source,
    LoC: (source.match(/\n/g) || '').length + 1,
  };
}

function getFiles(directory: string) {
  return glob
    .sync('**/*', { nodir: true, cwd: directory })
    .map((file) => getFileInfo(file, directory));
}

export default getFiles;
