/**
 *
 * @param {*[]} sortedArray
 * @param {*} seekElement
 * @returns {number}
 */
export const binarySearchRecursive = (
    sortedArray,
    seekElement,
    startIndex,
    endIndex
) => {
    if (startIndex <= endIndex) {
        // ambil index element paling tengah antara sortedArray
        // const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
        // or
        const middleIndex = Math.floor((startIndex + endIndex) / 2);

        // jika seekElement ditemukan maka return indexnya
        if (sortedArray[middleIndex] === seekElement) return middleIndex;

        // jika sortedArray berisi string maka akan dicek apakah element dari seekElement lebih kecil/awal dari current element
        if (sortedArray[middleIndex] < seekElement) {
            return binarySearchRecursive(
                sortedArray,
                seekElement,
                middleIndex + 1,
                endIndex
            );
        } else {
            return binarySearchRecursive(
                sortedArray,
                seekElement,
                startIndex,
                middleIndex - 1
            );
        }
    }

    // return -1 jika tidak menemukan apapun
    return -1;
};
