function findFloor(arr, x) {
    let start = 0;
    let end = arr.length - 1;
    let floor = -1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        // If the mid element is equal to x, it's the floor
        if (arr[mid] === x) {
            return arr[mid];
        }

        // If mid element is less than x, update the floor and move to the right half
        if (arr[mid] < x) {
            floor = arr[mid];
            start = mid + 1;
        } else {
            // If mid element is greater than x, just move to the left half
            end = mid - 1;
        }
    }

    return floor;
}

// Test cases
console.log(findFloor([1,2,8,10,10,12,19], 9));  // should return 8
console.log(findFloor([1,2,8,10,10,12,19], 20)); // should return 19
console.log(findFloor([1,2,8,10,10,12,19], 0));  // should return -1

module.exports = findFloor