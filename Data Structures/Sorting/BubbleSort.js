
let bubbleSort = a => {
    let n = a.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (a[j] > a[j + 1]) {
                [a[j], a[j + 1]] = [a[j + 1], a[j]]
            }
        }
    }
    return a;
}
// bubbleSort([3,2,6,3,1,2])
// (6) [1, 2, 2, 3, 3, 6]

/**
 * @param {number} rowIndex
 * @return {number[]}
 */

var getRow = function (rowIndex) {

    if (rowIndex === 0) return [[1]];
    else {
        let result = [];
        for (let row = 1; row <= rowIndex + 1; row++) {
            let arr = [];
            for (let col = 0; col < row; col++) {

                if (col === 0 || col === row - 1) {
                    arr.push(1);
                }
                else {
                    arr.push(result[row - 2][col - 1] + result[row - 2][col]);
                }
            }
            result.push(arr);
        }
        return result[rowIndex];
    }
};