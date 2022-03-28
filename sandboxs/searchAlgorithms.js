import { binarySearch } from '../search/binarySearch.js';
import { binarySearchRecursive } from '../search/binarySearchRecursive.js';
import { linearSearch } from '../search/linearSearch.js';

for (let i = 0; i < 10; i++) {
    const array = Array.from(Array(10000).keys());
    const randomSeekElement = Math.floor(Math.random() * array.length - 1);

    console.time('Binary Search');
    const foundedIndexBinarySearch = binarySearch(array, randomSeekElement);
    console.timeEnd('Binary Search');

    console.time('Binary Search with Recursive Function');
    const startIndex = 0;
    const endIndex = array.length - 1;
    const foundedIndexBinarySearchRecursive = binarySearchRecursive(
        array,
        randomSeekElement,
        startIndex,
        endIndex
    );
    console.timeEnd('Binary Search with Recursive Function');

    console.time('Linear Search');
    const foundedIndexLinearSearch = linearSearch(array, randomSeekElement);
    console.timeEnd('Linear Search');

    console.log('=============================================');

    console.log('Binary Search Founded Index:', foundedIndexBinarySearch);
    console.log(
        'Binary Search with Recursive Function Founded Index:',
        foundedIndexBinarySearchRecursive
    );
    console.log('Linear Search Founded Index:', foundedIndexLinearSearch);

    console.log('=============================================');
}
