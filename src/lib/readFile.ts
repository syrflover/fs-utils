import * as fs from 'fs';

interface IReadFileOptions {
    encoding?: string | null;
    flags?: string | null;
}

export function readFile(p: fs.PathLike, options?: { encoding?: null; flags?: string }): Promise<Buffer>;
export function readFile(p: fs.PathLike, options?: { encoding?: string; flags?: string }): Promise<string>;
export function readFile(p: fs.PathLike, options?: { encoding?: string | null; flags?: string | null }): Promise<string | Buffer>;
export function readFile(p: fs.PathLike, options?: IReadFileOptions) {
    return new Promise((resolve, reject) => {
        let res = '';

        const rs = fs.createReadStream(p, options as any);

        rs.on('data', (data) => {
            res += data;
        });

        rs.once('error', (error) => {
            reject(error);
        });

        rs.once('end', async () => {
            resolve(res);
        });
    });
}
