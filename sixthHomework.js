// 1. Given an array. Determine whether it consists only from unique elements or not.
function isAllUnique(arr) {
    let arrToSet = new Set(arr);
    return arr.length === arrToSet.size;
}

//2. Given an array of numbers. Find the sum of numbers’ quadratic which are even.
function sumOfEvenQuadratic(arr) {
    return arr.filter(el => Math.sqrt(el) % 2 === 0).reduce((a, b) => a + b, 0);
}

// 3. Check whether string is palindrome, or not.
function isPalindrome(str) {
    let reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}


// 4.Given a word and a list of possible anagrams, select the correct sublist.
function isThereAnagrams(word, arr) {
    let sortedWord = JSON.stringify(word.split("").sort());
    let splitWords = arr.map(el => el.split("").sort());
    let anagramWords = [];
    splitWords.forEach((el, index) => {
            if (JSON.stringify(el) === sortedWord) {
                anagramWords.push(arr[index])
            }
        }
    );
    return anagramWords
}
