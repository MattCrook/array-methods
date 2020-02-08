// Using one single line of JavaScript code, complete the following tasks on the array of integers below.

// Sort the numbers in descending order (10, 9, 8, 7, etc).
// Remove any integers greater than 19.
// Multiply each remaining number by 1.5 and then subtract 1.
// Then output (either in the DOM or the console) the sum of all the resulting numbers.



const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

/*
1. Sort the numbers in descending order (10, 9, 8, 7, etc).
sort turns the elements into strings by default. Comparing the utf-16 codes
*/
integers.sort((a, b) => a - b);
console.log(integers.reverse());

integers.sort((a, b) => b - a);

integers.sort(function(a, b) {
    return a - b;
});
console.log(integers);
// [29, 25, 21, 20, 18, 13, 12, 11, 8, 7, 6, 3, 2, 1]




// 2.  Remove any integers greater than 19.
const newArr = integers.filter((e) => {
    return e > 19
});
console.log(newArr);
// [20, 21, 25, 29]


const numMoreThanNinteen = newArr
console.log(numMoreThanNinteen);


// 3. Multiply each remaining number by 1.5 and then subtract 1.
const multiply = (arr) = forEach(e => e * 1.5 - 1);
console.log(multiply(numMoreThanNinteen));

arr = [];
for (i = 0; i < newArr.length; i++) {
    let multiply = i * 1.5;
    multiply - 1;
    arr.push(i);
};
console.log(arr);

// 4. Output sum of all resulting numbers.
console.log(newArr.reduce());
