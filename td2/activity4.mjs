// activity4.mjs

import _ from 'lodash';

// Example sentence
const sentence = "This is an example sentence to be split into words.";

// Use lodash's words function to split the sentence into an array of words
const wordsArray = _.words(sentence);

console.log('Original sentence:', sentence);
console.log('Array of words:', wordsArray);