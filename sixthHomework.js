// 1. Given an array. Determine whether it consists only from unique elements or not.
function isAllUnique(arr) {
    let arrToSet = new Set(arr);
    return arr.length === arrToSet.size;
}

// 3. Check whether string is palindrome, or not.
function isPalindrome(str) {
    let reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}
