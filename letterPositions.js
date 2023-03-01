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

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') {
      continue;
    } else if (results[sentence[i]] === undefined) {
      results[sentence[i]] = [i];
      continue;
    }
    results[sentence[i]].push(i);
  }
  return results;
};

//console.log(letterPositions("hello"));
//console.log(letterPositions("lighthouse in the house"));

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);