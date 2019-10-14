import * as fs from 'fs';

import { readFile } from './lib/readFile';
import { writeFile } from './lib/writeFile';
import { exists } from './lib/exists';
import { rm } from './lib/rm';

export default {
    exists,
    readFile,
    writeFile,
    rm,
    mkdir: fs.promises.mkdir,
    rename: fs.promises.rename,
};
