import * as fs from 'fs';

export { readFile } from './lib/readFile';
export { writeFile } from './lib/writeFile';
export { exists } from './lib/exists';
export { rm } from './lib/rm';

export const mkdir = fs.promises.mkdir;
export const rename = fs.promises.rename;
