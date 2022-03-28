/**
 *
 * @param {*[]} sortedArray
 * @param {*} seekElement
 * @returns {number}
 */
export const binarySearch = (sortedArray, seekElement) => {
    let startIndex = 0;
    let endIndex = sortedArray.length - 1;

    while (startIndex <= endIndex) {
        // ambil index element paling tengah antara sortedArray
        const middleIndex =
            startIndex + Math.floor((endIndex - startIndex) / 2);

        // jika seekElement ditemukan maka return indexnya
        if (sortedArray[middleIndex] === seekElement) return middleIndex;

        // jika sortedArray berisi string maka akan dicek apakah element dari seekElement lebih kecil/awal dari current element
        if (sortedArray[middleIndex] < seekElement) {
            startIndex = middleIndex + 1;
        } else {
            endIndex = middleIndex - 1;
        }
    }

    // return -1 jika tidak menemukan apapun
    return -1;
};
