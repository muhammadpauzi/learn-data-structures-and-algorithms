/**
 *
 * @param {*[]} array
 * @param {*} seekElement
 * @returns {number[]}
 */
export const linearSearch = (array, seekElement) => {
    let foundIndeces = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (seekElement === element) foundIndeces.push(i);
    }

    return foundIndeces;
};
