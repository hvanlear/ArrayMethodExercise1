function extractValue(arr, key) {
  return arr.reduce(function (acc, next) {
    acc.push(next[key]);
    return acc;
  }, []);
}

function vowelCount(str) {
  //creating a variable to hold vowels
  const vowels = "aeiou";
  //first splitting the str argument into an array holding each letter
  //then calling the reduce method
  return str.split("").reduce(function (acc, next) {
    //ensure that the next value is lowecase
    let lowerCased = next.toLowerCase();
    //if the next value is found in the index of vowels
    if (vowels.indexOf(lowerCased) !== -1) {
      //if there is already an entry for that vowel add 1
      if (acc[lowerCased]) {
        acc[lowerCased]++;
      } else {
        //if there isnt then create
        acc[lowerCased] = 1;
      }
    }
    return acc;
  }, {});
}

function addKeyAndValue(arr, key, value) {
  return arr.reduce(function (acc, next, idx) {
    acc[idx][key] = value;
    return acc;
  }, arr);
}

function partition(arr, cb) {
  return arr.reduce(
    function (acc, next) {
      if (cb(next)) {
        acc[0].push(next);
      } else {
        acc[1].push(next);
      }
      return acc;
    },
    [[], []]
  );
}
