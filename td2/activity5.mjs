// activity5.mjs

import { calculateHash } from './hashModule.mjs';

// Example usage with internal parameter
const filePath = '/Users/vinith/Downloads/psl/td2/activity5.txt'; // Replace with your file path
const hashType = 'md5'; // You can also use 'sha256', 'sha512', etc.

calculateHash(filePath, hashType);