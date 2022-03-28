import { binarySearch } from '../search/binarySearch.js';
import { linearSearch } from '../search/linearSearch.js';

const array = Array.from(Array(10000).keys());
const randomSeekElement = Math.floor(Math.random() * array.length - 1);

console.time('Binary Search');
const foundedIndexBinarySearch = binarySearch(array, randomSeekElement);
console.timeEnd('Binary Search');

console.time('Linear Search');
const foundedIndexLinearSearch = linearSearch(array, randomSeekElement);
console.timeEnd('Linear Search');

console.log('Binary Search :', foundedIndexBinarySearch);
console.log('Linear Search :', foundedIndexLinearSearch);
