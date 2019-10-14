import * as fs from 'fs';

interface IWriteFileOptions {
    encoding?: string | null;
    flags?: string | null;
}

export function writeFile(p: fs.PathLike, data: any, options?: { encoding?: string | null; flags?: string | null }): Promise<void>;
export function writeFile(p: fs.PathLike, data: any, options?: IWriteFileOptions) {
    return new Promise((resolve, reject) => {
        const ws = fs.createWriteStream(p, options as any);

        ws.once('error', (error) => {
            reject(error);
        });

        ws.write(data, (error) => {
            if (error) {
                reject(error);
                return;
            }

            resolve();
        });
    });
}
