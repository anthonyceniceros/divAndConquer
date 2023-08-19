function findRotationCount(arr) {
    let start = 0, end = arr.length - 1;
    while (start <= end) {
        if (arr[start] <= arr[end]) {
            return start;
        }

        let mid = Math.floor((start + end) / 2);
        let next = (mid + 1) % arr.length;
        let prev = (mid + arr.length - 1) % arr.length;

        if (arr[mid] <= arr[next] && arr[mid] <= arr[prev]) {
            return mid;
        } else if (arr[start] <= arr[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return 0;
}


module.exports = findRotationCount