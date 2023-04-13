/*******************************************************************************
Write a function `xorSelect` that accepts an array and two callback as arguments.
The function should return a new array containing elements of the original array
that result in true when passed in one of the callbacks, but not both.

Examples:

let isEven = function(n) {
  return n % 2 === 0;
};

let isPositive = function(n) {
  return n > 0;
};

console.log(xorSelect([-2, -1, 1, 2, 3, 4], isEven, isPositive));
// [ -2, 1, 3 ]


let longString = function(s) {
  return s.length > 4;
};

let startsA = function(s) {
  return s[0] === "a";
};

console.log(
  xorSelect(["art", "academy", "app", "cat", "buttery"], longString, startsA)
);
// [ 'art', 'app', 'buttery' ]
*******************************************************************************/
/*Accepts an array and two callbacks as arguments.  Pushes elements of the array to a new array if they return true when passed through one callback, but not both.*/
let xorSelect = function(array, cb1, cb2) {
    let xorArray = [];
    for (let i = 0; i < array.length; i++) {
        if (cb1(array[i]) === true || cb2(array[i]) === true) {
          if (!(cb1(array[i]) === true && cb2(array[i]) === true)) {
            xorArray.push(array[i]);
          }
        }
    }
    return xorArray;
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = xorSelect;