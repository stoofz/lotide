// const eqArrays = function(array1, array2) {
  
//   if (array1.length !== array2.length) {
//     return false;
//   }

//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const assertArraysEqual = function(actual, expected) {
//   const passed = String.fromCodePoint(0x2705, 0x2705, 0x2705);
//   const failed = String.fromCodePoint(0x274C, 0x274C, 0x274C);
//   if (eqArrays(actual, expected)) {
//     return console.log(`${passed} Assertion Passed: ${actual} === ${expected}`);
//   }
//   return console.log(`${failed} Assertion Failed: ${actual} !== ${expected}`);
// };

const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  const middleValues = [];
  if (array.length % 2 === 0 && array.length > 2) {
    middleValues.push(array[array.length / 2] - 1);
    middleValues.push(array[array.length / 2]);
  } else if (array.length % 2 === 1 && array.length > 2) {
    middleValues.push(array[(array.length + 1) / 2 - 1]);
  }
  return middleValues;
};

// Test Cases
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

