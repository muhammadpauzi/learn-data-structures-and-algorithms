import { describe, it } from 'mocha';
import { assert } from 'chai';
import { binarySearch } from './binarySearch.js';

describe('Binary Search Tests', () => {
    it('should search all numbers in array', () => {
        const array = [1, 2, 2, 3, 4, 5, 6, 7];

        assert.equal(binarySearch(array, 10), -1);
        assert.equal(binarySearch(array, 1), 0);
        assert.equal(binarySearch(array, 2), 1);
        assert.equal(binarySearch(array, 5), 5);
    });

    it('should search all strings in array', () => {
        const array = ['halo', 'indonesia', 'merdeka']; // h, i, m (sorted string)

        assert.equal(binarySearch(array, 'ada?'), -1);
        assert.equal(binarySearch(array, 'indonesia'), 1);
        assert.equal(binarySearch(array, 'halo'), 0);
    });
});
