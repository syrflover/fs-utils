import * as fs from 'fs';

export async function exists(p: fs.PathLike): Promise<boolean> {
    try {
        await fs.promises.access(p);
        return true;
    } catch {
        return false;
    }
}
