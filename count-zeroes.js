




function countZeroes(arr) {
    function firstZeroIndex(arr, start, end) {
        if (start > end) {
            return -1;
        }

        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === 0 && (mid === 0 || arr[mid - 1] === 1)) {
            return mid;
        }

        if (arr[mid] === 1) {
            return firstZeroIndex(arr, mid + 1, end);
        } else {
            return firstZeroIndex(arr, start, mid - 1);
        }
    }

    let index = firstZeroIndex(arr, 0, arr.length - 1);

    if (index === -1) {
        return 0;
    }
    return arr.length - index;
}


module.exports = countZeroes