const eqArrays = function(array1, array2) {
  
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  const passed = String.fromCodePoint(0x2705, 0x2705, 0x2705);
  const failed = String.fromCodePoint(0x274C, 0x274C, 0x274C);
  if (eqArrays(actual, expected)) {
    return console.log(`${passed} Assertion Passed: ${actual} === ${expected}`);
  }
  return console.log(`${failed} Assertion Failed: ${actual} !== ${expected}`);
};

const takeUntil = function(array, callback) {
  let finalArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) === false) {
      finalArray.push(array[i]);
      continue;
    }
    return finalArray;
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
//console.log(results1);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ], true);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
//console.log(results2);
assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood'], true);

const data3 = ["Three", "Four", "Five", "Six", "Seven", "Ten"];
const results3 = takeUntil(data3, x => x.length === 3);
//console.log(results3);
assertArraysEqual(results3, ["Three", "Four", "Five"], true);
