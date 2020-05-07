/* 1. Given an array. Write a recursive function that removes the first element and returns the given array. (without using arr.unshift(),assign second element to first, third element to
second */

function removeFirst(arr, i = 0) {
    arr[i] = arr[i + 1];
    if (i < arr.length) {
        removeFirst(arr, ++i)
    } else {
        arr.pop()
    }
    return arr
}


//2. Given an object. Invert it (keys become values and values become keys). If there is  more than key for that given value create an array.
function swapKeyAndValue(object) {
    const newObj = {};
    Object.keys(object).forEach((key) => {
        if (newObj[object[key]]) {
            if (Array.isArray(newObj[object[key]])) {
                newObj[object[key]].push(key)
            } else {
                const arr = [];
                arr.push(key);
                arr.push(newObj[object[key]]);
                newObj[object[key]] = arr
            }
        } else {
            newObj[object[key]] = key;
        }
    });
    return newObj
}


//3. Given the list of the following readers: Output the books sorted by the percent in descending order which readStatus is true.

function descendingTrueList(arr) {
    let newArr = arr.filter((value) => value.readStatus === true);
    newArr.sort((a, b) => b.percent - a.percent);
    return newArr.map(el => el.book)
}


//4. Given an array and a number N.  Write a recursive function that rotates an array N places to the left.
function rotateArray(arr, n) {
    const l = arr.length;
    if (n < 0) {
        n = l + n
    } else {
        arr.push(arr.shift());
        n--;
    }
    if (n > 0) {
        rotateArray(arr, n);
    }
    return arr
}

//6. Write a JavaScript function to get all possible subsets of given length of the given array.


function getAllSubsets(arr, n) {
    if (arr.length < n) {
        return "Invalid size of set"
    } else if (n === arr.length) {
        return arr
    }
    return arr.reduce(
        (subsets, value) => subsets.concat(
            subsets.map(set => [value, ...set])
        ),
        [[]]
    ).filter(a => a.length === n);
}


//7.Create constructor function which instances would be objects with already implemented method &quot;map&quot; (like Array.map) .

function ObjectWithMap(obj) {
    this.obj = obj;
    let key = Object.keys(this.obj);
    let value = Object.values(this.obj);
    this.objMap = function (fn) {
        let newValues = value.map(fn);
        for (let i = 0; i < key.length; i++) {
            let x = {};
            x[key[i]] = newValues[i];
            Object.assign(this.obj, x)
        }
        return this.obj
    }
}

let newObj = new ObjectWithMap(
    {
        "x": 1,
        "y": 2
    });
let mapObj = newObj.objMap((x => x * 2));
console.log(newObj);





