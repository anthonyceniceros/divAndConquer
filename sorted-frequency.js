function sortedFrequency(arr, num) {
    function findFirstOrLast(start, end, first = true) {
        let result = -1;
        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            if (arr[mid] === num) {
                result = mid;
                if (first) {
                    end = mid - 1;
                } else {
                    start = mid + 1;
                }
            } else if (arr[mid] < num) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return result;
    }

    let first = findFirstOrLast(0, arr.length - 1, true);
    if (first === -1) return -1; // If number not present in the array
    let last = findFirstOrLast(first, arr.length - 1, false);
    return last - first + 1;
}


module.exports = sortedFrequency