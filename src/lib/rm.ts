import * as fs from 'fs';

interface IRmOptions {
    /**
     * @default false
     */
    recursive?: boolean | null;
    /**
     * available on recursive: true
     *
     * @default true
     */
    delete_root_directory?: boolean | null;
}

const rm_default: IRmOptions = {
    recursive: false,
    delete_root_directory: true,
};

export async function rm(p: fs.PathLike, _options: IRmOptions = rm_default): Promise<void> {
    const options = { ...rm_default, ..._options };
    const stat = await fs.promises.stat(p);

    if (!options.recursive) {
        if (stat.isFile()) {
            return fs.promises.unlink(p);
        }

        if (stat.isDirectory()) {
            return fs.promises.rmdir(p);
        }
    }

    if (stat.isFile()) {
        return fs.promises.unlink(p);
    }

    if (stat.isDirectory()) {
        const dirs = await fs.promises.readdir(p);

        for (const dir of dirs) {
            await rm(`${p}/${dir}`, { recursive: true, delete_root_directory: true });
        }

        if (options.delete_root_directory) {
            await fs.promises.rmdir(p);
        }
    }
}
