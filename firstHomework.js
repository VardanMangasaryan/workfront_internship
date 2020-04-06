// 1: Given a number. Print “odd” if the number is odd and “even” if it’s even.

let num = 3;
num % 2 === 0 ? console.log("Number is even") : console.log("Number is odd");
//......................................................................................................


//2: Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.

let first = 24;
let second = 6;

if (first % second === 0 || second % first === 0) {
    console.log(1)
} else {
    console.log(0)
}
//......................................................................................................


//3: Given two variables, which are the angles of a triangle. Find the third angle of the triangle. (Sum of the angles of a triangle equals 180 degrees).

let firstAngle, secondAngle;
let thirdAngle = 180 - (firstAngle + secondAngle);

console.log(thirdAngle);
//..............................................


//4: Given number n (positive integer). Print the value of n + nn + nnn(not multiplication).

let n;
console.log(`${n}${2 * n}${3 * n}`);
//......................................................................................................


//5: Given a positive integer. Bring the last digit of the number to the beginning. Print the new number. If the last digit of the inserted number is 0, number remains the same.
let newNumber, reminder;
reminder = newNumber % 10;

if (reminder === 0 || reminder === newNumber) {
    console.log(newNumber)
} else {
    console.log(`${reminder}${Math.floor(newNumber / 10)}`)
}
//......................................................................................................


//6: Given five numbers as input. Calculate and print the average of the numbers(without using arrays).
let num1, num2, num3, num4, num5;

console.log((num1 + num2 + num3 + num4 + num5) / 5);
//......................................................................................................


//7: Check if a number is a multiple of 3, 5 or 7 and output the appropriate message.
let divNumber;
if (divNumber % 5 !== 0 && divNumber % 7 !== 0 && divNumber % 3 !== 0) {
    console.log(`${divNumber} is not a multiple of 3, 5 or 7.`)
} else if (divNumber % 5 === 0 && divNumber % 7 === 0 && divNumber % 3 === 0) {
    console.log(`${divNumber} is a multiple of 3, 5 and 7.`)
} else if (divNumber % 5 === 0 && divNumber % 7 === 0 && divNumber % 3 !== 0) {
    console.log(`${divNumber} is a multiple of 5 and 7.`)
} else if (divNumber % 5 === 0 && divNumber % 7 !== 0 && divNumber % 3 !== 0) {
    console.log(`${divNumber} is a multiple of 5`)
} else if (divNumber % 5 === 0 && divNumber % 7 !== 0 && divNumber % 3 === 0) {
    console.log(`${divNumber} is a multiple of 5 and 3`);
} else if (divNumber % 5 !== 0 && divNumber % 7 === 0 && divNumber % 3 === 0) {
    console.log(`${divNumber} is a multiple of 7 and 3`)
} else if (divNumber % 5 !== 0 && divNumber % 7 === 0 && divNumber % 3 !== 0) {
    console.log(`${divNumber} is a multiple of 7`)
} else if (divNumber % 5 !== 0 && divNumber % 7 !== 0 && divNumber % 3 === 0) {
    console.log(`${divNumber} is a multiple of 3`);
}
//......................................................................................................


//8: Given an age, figure out whether someone is a baby(1 months - 12 months), toddler (1 year - 2 years), child(3 years - 12 years ), teenager(13 years - 17 years) or adult(18 years and more ). Also check that age in months is between 1 and 12.

let age, word;
if (word === "year") {
    switch (true) {
        case (1 <= age && age <= 2):
            console.log("Toddler");
            break;
        case (3 <= age && age <= 12):
            console.log("Child");
            break;
        case (13 <= age && age <= 17):
            console.log("Teenager");
            break;
        default:
            console.log("Adult");
    }
} else {
    console.log("Baby")
}
//......................................................................................................


//9: Given three numbers. Sort them by the ascending order.
let a, b, c;

if (a >= b && a >= c) {
    if (b >= c) {
        console.log(`${c}, ${b}, ${a}`)
    } else {
        console.log(`${b}, ${c}, ${a}`)
    }
} else if (b >= a && b >= c) {
    if (a >= c) {
        console.log(`${c}, ${a}, ${b}`)
    } else {
        console.log(`${a}, ${c}, ${b}`)
    }
} else if (c >= a && c >= b) {
    if (a >= b) {
        console.log(`${b}, ${a}, ${c}`)
    } else {
        console.log(`${a}, ${b}, ${c}`)
    }
}
//......................................................................................................


//10: Percentage marks obtained by a student in three exams are to be entered to a computer. An indication of Pass or Fail is given out after the three marks are entered. The criteria for passing are as follows:
// A student passes if all three examinations are passed.
// Additionally a student may pass if only one subject is failed but the overall average is greater than or equal to 50.
// The pass mark for an individual subject is 40.
let grades = [];
let count = 0;
for (let i = 0; i < grades.length; i++) {
    if (grades[i] <= 40) {
        count++;
    }
}
if (count === 0) {
    console.log("Passed")
} else if (count === 1) {
    if ((grades[0] + grades[1] + grades[3]) / 3 >= 50) {
        console.log("Passed")
    } else {
        console.log("Not Passed")
    }
} else {
    console.log("Not Passed")
}
//......................................................................................................


//11: Find the sign of product of three numbers without multiplication operator. Display the specified sign.
let number1, number2, number3;

if (number1 / number2 / number3 < 0) {
    console.log("-")
} else if (number1 / number2 / number3 > 0) {
    console.log("+")
} else {
    console.log("Unsigned")
}
//Just Joke :D


let numbs, isUnsigned;
numbs = [];

isUnsigned = false;

for (let l = 0; l < numbs.length; l++) {
    var newCount = 0;
    if (numbs[l] === 0) {
        isUnsigned = true;
        break
    } else if (numbs[l] < 0) {
        newCount += 1
    }
}
if (isUnsigned) {
    console.log("Unsigned")
} else if (newCount % 2 === 0) {
    console.log("+")
} else {
    console.log("-")
}
//......................................................................................................


//12: Input three numbers a, b, c respectively, where a is a non zero number and write a program to solve quadratic equations: ax2+ bx+c=0. (Hint: use Math.pow or Math.sqrt).

let quadA, quadB, quadC, discr;
discr = (Math.pow(quadB, 2) - (4 * quadA * quadC));

if (quadA === 0) {
    console.log("Enter valid constants")
} else if (discr < 0) {
    console.log("Solution does not exists");
} else if (discr === 0) {
    console.log(`Solution is ${-quadB / (2 * quadA)}`)
} else {
    let sqrtDiscr = Math.sqrt(discr);
    console.log(`Solutions are ${-(quadB - sqrtDiscr) / (2 * quadA)} and ${-(quadB + sqrtDiscr) / (2 * quadA)}`)
}
//......................................................................................................


//13: Given the following code rewrite it using only two if operators. (Hint: use logical operators).
var m = +prompt();

var i = 0;
var j = 0;

if (m % 2 === 0 && !Math.floor(m / 10)) {
    i += 1
}
if (m % 3 === 0 && m % 10 === 0) {
    j += 1
}
//......................................................................................................


//14: Insert a digit and a number. Check whether the digits contains in the number or not.?

let dig, numb;

dig = dig.toString();
numb = numb.toString();
let isInNumber = false;

for (let k = 0; k < numb.length; k++) {
    if (numb[k] === dig) {
        isInNumber = true;
        break
    }
}
if (isInNumber) {
    console.log("Yes")
} else {
    console.log("No")
}
//......................................................................................................


//15: Enter a number. Reverse its first and last digits. Print the new number.

let longNumber;
let newLongNumber = "";
longNumber = longNumber.toString();
if (longNumber.length === 1) {
    console.log(longNumber)
} else {
    let firstDig = longNumber[0];
    let lastDig = longNumber[longNumber.length - 1];
    longNumber = longNumber.slice(1, longNumber.length - 1);
    newLongNumber += lastDig;
    newLongNumber += longNumber;
    newLongNumber += firstDig;
    if (newLongNumber[0] === "0") {
        console.log(newLongNumber.slice(1, newLongNumber.length))
    } else {
        console.log(newLongNumber)
    }

}
//......................................................................................................


//17: Write a program which will compute the area of a rectangular or a triangle after prompting the user to type the name of the figure name. Also check that entered numbers are positive.
// For the triangle entered numbers are height and and base.

let firstParam, secondParam, NameOfSurface;

if (firstParam > 0 && secondParam > 0) {
    let area = firstParam * secondParam;
    console.log(`Square of ${NameOfSurface} is ${area}`)
} else {
    console.log("Please enter only positives")
}
//......................................................................................................


//18: (***) Enter a number. Find the difference between its biggest and smallest digits.
let bigNumber;

bigNumber = bigNumber.toString();
let len = bigNumber.length;
if (len === 1) {
    console.log(0)
} else {
    let max = bigNumber[0];
    let min = bigNumber[0];
    for (let i = 0; i < bigNumber.length; i++) {
        if (bigNumber[i] >= max || bigNumber[i] < min) {
            if (bigNumber[i] > max) {
                max = bigNumber[i];
            } else {
                min = bigNumber[i]
            }
        }
    }
    console.log(max - min);
}
