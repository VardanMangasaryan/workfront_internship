//1. Given a sorted array and an element from that array. Find the index of that element using binary search.
function binarySearch(arr, el) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((end + start) / 2);
        if (arr[mid] === el) {
            return mid
        } else if (arr[mid] < el) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
    return "element is not in array"
}


//2. Create a function that builds.
function constructTree(arr, id = "root", obj = {}) {
    let children = arr.reduce((key, value) => key = value.id === id ? value : key).children;
    if (children.length === 0) {
    } else {
        children.map(el => {
            obj[el] = constructTree(arr, el)|| {};
        });
        return obj
    }
}

