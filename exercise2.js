// hasOddNumber
// Write a function called hasOddNumber which accepts an array and returns true
// if the array contains at least one odd number, otherwise it returns false.

let nums = [0, 1, 2, 3, 4, 5];
let nums2 = [2, 2, 4, 6, 8];
let odd = [3, 5, 7, 9];

let words = ["hello", "goodbye", "goodmorning", "hello"];

let hasOddNumber = (arr) => {
  return arr.some(function (num) {
    return num % 2 !== 0;
  });
};

// hasAZero
// Write a function called hasAZero which accepts a number and returns true if that number
// contains at least one zero. Otherwise, the function should return false

let hasAZero = (arr) => {
  return arr.some(function (num) {
    return num === 0;
  });
};

// hasOnlyOddNumbers
// Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If
// any of the values in the array are not odd, the function should return false.

let hasOnlyOddNumber = (arr) => {
  return arr.every((num) => {
    return num % 2 !== 0;
  });
};

//hasNoDuplicates
// Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values
// (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.

function hasNoDuplicates(arr) {
  return arr.every(function (val) {
    return arr.indexOf(val) === arr.lastIndexOf(val);
  });
}

// hasCertainKey
// Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every
// single object in the array contains that key. Otherwise it should return false.

let hasCertainKey = (arr, key) => {
  return arr.every(function (val) {
    return key in val;
  });
};

let arr = [
  { title: "Instructor", first: "Elie", last: "Schoppik" },
  { title: "Instructor", first: "Tim", last: "Garcia", isCatOwner: true },
  { title: "Instructor", first: "Matt", last: "Lane" },
  { title: "Instructor", first: "Colt", last: "Steele", isCatOwner: true },
];
