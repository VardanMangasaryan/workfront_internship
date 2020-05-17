// 1. Given an array. Determine whether it consists only from unique elements or not.
function isAllUnique(arr) {
    let arrToSet = new Set(arr);
    return arr.length === arrToSet.size;
}

