import * as fs from 'fs';

import { readFile as _readFile } from './lib/readFile';
import { writeFile as _writeFile } from './lib/writeFile';
import { exists as _exists } from './lib/exists';
import { rm as _rm } from './lib/rm';

// tslint:disable-next-line: no-namespace
namespace _fs {
    export const readFile = _readFile;
    export const writeFile = _writeFile;
    export const exists = _exists;
    export const rm = _rm;
    export const mkdir = fs.promises.mkdir;
    export const rename = fs.promises.rename;
}

export default _fs;
