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

