// hashModule.mjs

import { createHash } from 'crypto';
import { readFile, writeFile } from 'fs/promises';

export async function calculateHash(filePath, hashType) {
    try {
        const fileContent = await readFile(filePath);
        const hash = createHash(hashType).update(fileContent).digest('hex');
        const newFileName = `${filePath}.${hashType}.txt`;
        await writeFile(newFileName, hash);
        console.log(`Hash (${hashType}) of file '${filePath}' saved to '${newFileName}'`);
    } catch (err) {
        console.error(`Error processing file '${filePath}':`, err);
    }
}