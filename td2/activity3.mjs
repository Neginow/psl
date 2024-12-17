// activity3.mjs

import { readdir } from 'fs/promises';

async function listFiles(directory) {
    try {
        const files = await readdir(directory);
        console.log(`Files in directory '${directory}':`);
        files.forEach(file => {
            console.log(file);
        });
    } catch (err) {
        console.error(`Error reading directory '${directory}':`, err);
    }
}

// Replace 'your-directory-path' with the actual directory path you want to list
const directoryPath = '/Users/vinith/Downloads/psl/td2';
listFiles(directoryPath);