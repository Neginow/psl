// activity2.mjs

import { add, minus, multiply, divide } from './arithmetic.mjs';

const a = 10;
const b = 5;

console.log(`Add: ${a} + ${b} = ${add(a, b)}`);
console.log(`Minus: ${a} - ${b} = ${minus(a, b)}`);
console.log(`Multiply: ${a} * ${b} = ${multiply(a, b)}`);
console.log(`Divide: ${a} / ${b} = ${divide(a, b)}`);