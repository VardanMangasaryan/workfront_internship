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
    while (numFib + secondLast < n) {
        numFib += secondLast;
        secondLast = last;
        last = numFib;
        completeSequence += `${numFib} `;
    }
    return completeSequence
}

//4. Insert a number. Calculate product and sum of the digits of the number. If product is divisible by the sum, print the quotient, otherwise print the remainder.


function fourthExercise(num) {
    if (num === 0) {
        return "Cannot calculate"
    }
    num = num;
    let sum = 0;
    let prod = 1;
    let div;
    for (let i = 0; i < num.toString().length; i++) {
        sum += num[i];
        prod *= num[i];
    }
    div = prod % sum;
    if (div === 0) {
        return `Quotient is ${prod / sum}`
    } else {
        return `Reminder is ${div}`
    }
}




//9. Given three numbers a, b (a ≤ b) and num. Create an array of evenly spaced numbers by the given num length over the specified interval (from a to b).

function returnNumbers(a, b, num) {
    let listOfNumbers = [];
    listOfNumbers.push(a);
    let d = (b - a) / (num - 1);
    for (let i = 0; i < num - 1; i++) {
        a += d;
        listOfNumbers.push(a)
    }
    return listOfNumbers
}




//10. Given an array of numbers. Find the index of the second maximum element.
function secondMaxOfArray(arr) {
    arr.sort();
    return arr[arr.length - 2]
}
