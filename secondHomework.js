// 1. Insert a number. Print ‘yes’ if the number is prime, ‘no’ otherwise.

function isNumPrime(num) {
    let isPrime = "yes";
    let i = 2;
    num = Math.abs(num);
    if (num < 3) {
        isPrime = false
    } else {
        while (i <= Math.round(num / 2)) {
            if (num % i === 0) {
                isPrime = "no";
                break
            } else {
                i++
            }
        }
    }
    return isPrime
}



//2. Given a number n ( n>= 0 ). Print nth Fibonacci number.  (Fibonacci series: 0, 1, 1, 2, 3, 5, 8 …, ak = ak-1 + ak-2)

function numberFibonacci(n) {
    if (n === 0 || n === 1) {
        return n
    } else {
        return numberFibonacci(n - 1) + numberFibonacci(n - 2)
    }
}



//3. Given a number n( n> 0 ). Print Fibonacci series up to n
function sequenceFibonacci(n) {
    let last = 1;
    let numFib = 0;
    let secondLast = 0;
    let completeSequence = "";
    let i = 0;
    while(numFib + secondLast < n){
        numFib += secondLast;
        secondLast = last;
        last = numFib;
        completeSequence += `${numFib} `;
        i++
    }
    return completeSequence
}
