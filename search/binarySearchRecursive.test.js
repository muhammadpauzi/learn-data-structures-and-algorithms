import { describe, it } from 'mocha';
import { assert } from 'chai';
import { binarySearchRecursive } from './binarySearchRecursive.js';

describe('Binary Search With Recursive Tests', () => {
    it('should search all numbers in array', () => {
        const array = [1, 2, 2, 3, 4, 5, 6, 7];

        const startIndex = 0;
        const endIndex = array.length - 1;

        assert.equal(
            binarySearchRecursive(array, 10, startIndex, endIndex),
            -1
        );
        assert.equal(binarySearchRecursive(array, 1, startIndex, endIndex), 0);
        assert.equal(binarySearchRecursive(array, 2, startIndex, endIndex), 1);
        assert.equal(binarySearchRecursive(array, 5, startIndex, endIndex), 5);
    });

    it('should search all strings in array', () => {
        const array = ['halo', 'indonesia', 'merdeka']; // h, i, m (sorted string)

        const startIndex = 0;
        const endIndex = array.length - 1;

        assert.equal(
            binarySearchRecursive(array, 'ada?', startIndex, endIndex),
            -1
        );
        assert.equal(
            binarySearchRecursive(array, 'indonesia', startIndex, endIndex),
            1
        );
        assert.equal(
            binarySearchRecursive(array, 'halo', startIndex, endIndex),
            0
        );
    });
});
