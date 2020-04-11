// 1. Insert a number. Print ‘yes’ if the number is prime, ‘no’ otherwise.

function isNumPrime(num) {
    let isPrime = true;
    let i = 2;
    num = Math.abs(num);
    if (num < 3) {
        isPrime = false
    } else {
        while (i <= Math.round(num / 2)) {
            if (num % i === 0) {
                isPrime = false;
                break
            } else {
                i++
            }
        }
    }
    return `Is prime = ${isPrime}`
}

console.log(isNumPrime(3));
