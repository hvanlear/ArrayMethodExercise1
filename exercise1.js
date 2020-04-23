//FOR EACH +++++++++++++++++++
//doubleValues
//Write a function called doubleValues which accepts an array and returns a new array with all
//the values in the array passed to the function doubled
let doubleValues = (arr) => {
  let newArr = [];
  arr.forEach((element) => {
    newArr.push(element * 2);
  });
  return newArr;
};

//only Even Values
//Write a function called onlyEvenValues which accepts an array and returns a new
//array with only the even values in the array passed to the function
let onlyEvenValues = (arr) => {
  let newArr = [];
  arr.forEach((element) => {
    if (element % 2 === 0) {
      newArr.push(element);
    }
  });
  return newArr;
};

//show First and Last
//Write a function called showFirstAndLast which accepts an array of strings
//and returns a new array with only the first and last character of each string.

let showFirstAndLast = (arr) => {
  let newArr = [];
  arr.forEach((element) => {
    newArr.push(element[0] + element.slice(-1));
  });
  return newArr;
};

///addKeyandValue
//Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array
//passed to the function with the new key and value added for each object
let addKeyAndValue = (arr, newKey, newValue) => {
  arr.forEach((element) => {
    element[newKey] = newValue;
  });
  return arr;
};

///vowelCount

//Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values
//as the number of times the vowel appears in the string. This function should
//be case insensitive so a lowercase letter and uppercase letter should count
function vowelCount(str) {
  let splitArr = str.split("");
  let obj = {};
  const vowels = "aeiou";

  splitArr.forEach((letter) => {
    let lowerCasedLetter = letter.toLowerCase();
    if (vowels.indexOf(lowerCasedLetter) !== -1) {
      if (obj[lowerCasedLetter]) {
        obj[lowerCasedLetter]++;
      } else {
        obj[lowerCasedLetter] = 1;
      }
    }
  });
  return obj;
}

/// Map +++++++++++++++

let doubleValuesWithMap = (arr) => {
  return arr.map(function (num) {
    return num * 2;
  });
};

//val times index

//Write a function called valTimesIndex which accepts an array and returns a new array with
//each value multiplied by the index it is currently at in the array.

let valTimesIndex = (arr) => {
  return arr.map(function (num, index, array) {
    return num * index;
  });
};

//Extract Key
//Write a function called extractKey which accepts an array of objects and some key and returns
//a new array with the value of that key in each object.

let extractKey = (arr, mykey) => {
  return arr.map(function (val) {
    return val[mykey];
  });
};

//Extract Full name
// Write a function called extractFullName which accepts an array of objects and
//returns a new array with the value of the key with a name of “first” and the value of a key with the name of “last”
// in each object, concatenated together with a space.

let extractFullName = (arr) => {
  return arr.map(function (val) {
    return val.first + " " + val.last;
  });
};

//// filter +++++++++++++++

//filter by value
//Write a function called filterByValue which accepts an array of objects and a key and returns a new
//array with all the objects that contain that key.

let filterByValue = (arr, key) => {
  return arr.filter(function (val) {
    return val[key];
  });
};

/// find
//Write a function called find which accepts an array and a value and returns
//the first element in the array that has the same value as the second parameter or
//undefined if the value is not found in the array.

let find = (arr, val) => {
  return arr.filter(function (el) {
    return val === el;
  })[0];
};

//findObj
//Write a function called findInObj which accepts an array of objects,
//a key, and some value to search for and returns the
//first found value in the array.

let findInObj = (arr, key, searchValue) => {
  return arr.filter(function (val) {
    return val[key] === searchValue;
  })[0];
};

///removeVowels
//Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased)
//removed. Every character in the new string should be lowercased.

let removeVowels = (str) => {
  const vowels = "aeiou";
  lowerCase = str.toLowerCase();
  return lowerCase
    .split("")
    .filter(function (el) {
      return vowels.indexOf(el) === -1;
    })
    .join("");
};
