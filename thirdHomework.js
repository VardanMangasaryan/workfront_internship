// 1. Write a recursive function to determine whether all digits of the number are odd or not.
function isAllOdd(n) {
    let isOdd = true;
    if (n % 2 === 0) {
        isOdd = false;
        return isOdd;
    } else {
        n = Math.floor(n / 10);
        if (n === 0) {
            return isOdd
        }
        return isAllOdd(n);
    }
}


// 2. Given an array of numbers. Write a recursive function to find its minimal positive element. (if such element does not exist, return -1)․

function findMinimalPositive(array) {
    const checkArrayEl = array.filter(el => el >= 0);
    if (!checkArrayEl.length) {
        return -1;
    }
    const min = Math.min(...array);
    if (min < 0) {
        const filteredArray = array.filter(el => el !== min);
        return findMinimalPositive(filteredArray)
    } else {
        return min;
    }
}


// 3. Write a recursive function which receives a number as arguments and returns the fibonacci sequence as array.
function numberFibonacciSequnce(n) {
    const arr = [];

    const memo = [];

    function numberFibonacci(n) {
        if (n in memo) {
            return memo[n]
        } else if (n === 0 || n === 1) {
            return 1
        } else {
            let value = numberFibonacci(n - 1) + numberFibonacci(n - 2);
            memo[n] = value;
            return value
        }
    }

    for (let i = 0; i < n; i++) {
        arr.push(numberFibonacci(i))
    }
    return arr
}


// 4. Given an array of nested arrays. Write a recursive function that flattens it. (Hint create function that concats arrays).
function joinArrays(arr) {
    let joinedArray = [];
    for (let i of arr) {
        if (Array.isArray(i)) {
            joinedArray = joinedArray.concat(joinArrays(i))
        } else {
            joinedArray.push(i)
        }
    }
    return joinedArray
}


// 5. Given a number. Write a function that calculates its sum of the digits and if that sum has more than 1 digit find the sum of digits of that number. Repeat that process if needed and return the result.
function sumOfDigits(num) {
    let digit = num % 10;
    let newNum = Math.floor(num / 10);
    if (newNum + digit < 10) {
        return newNum + digit
    }
    return sumOfDigits(digit + newNum);
}
