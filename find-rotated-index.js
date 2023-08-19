function findRotatedIndex(arr, num) {
    let start = 0, end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === num) {
            return mid;
        }
        
        // Check if left half is sorted
        if (arr[start] <= arr[mid]) {
            if (num >= arr[start] && num < arr[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            if (num > arr[mid] && num <= arr[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return -1;
}


module.exports = findRotatedIndex