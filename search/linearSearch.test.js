import { describe, it } from 'mocha';
import { assert } from 'chai';
import { linearSearch } from './linearSearch.js';

describe('Linear Search Tests', () => {
    it('should search all numbers in array', () => {
        const array = [1, 2, 3, 2, 4, 5, 6];

        assert.deepEqual(linearSearch(array, 10), []);
        assert.deepEqual(linearSearch(array, 1), [0]);
        assert.deepEqual(linearSearch(array, 2), [1, 3]);
    });

    it('should search all strings in array', () => {
        const array = ['a', 'b', 'c', 'b'];

        assert.deepEqual(linearSearch(array, 'z'), []);
        assert.deepEqual(linearSearch(array, 'a'), [0]);
        assert.deepEqual(linearSearch(array, 'b'), [1, 3]);
    });
});
