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

const map = function(array, callback) {
  
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["Pool", "on", "the", "roof", "must", "have", "a", "leak"];

const results1 = map(words, word => word[0]);

const results2 = map(words, word => word + " foo");

const results3 = map(words, word => word.length);

const results4 = map(words, word => {
  if (word === "have") {
    return "NOT HAVE";
  }
  return word;
});


assertArraysEqual(results1, ['P', 'o', 't', 'r', 'm', 'h', 'a', 'l']);
assertArraysEqual(results2.join(" "), ("Pool foo on foo the foo roof foo must foo have foo a foo leak foo"));
assertArraysEqual(results3, [4, 2, 3, 4, 4, 4, 1, 4]);
assertArraysEqual(results4.join(" "), ("Pool on the roof must NOT HAVE a leak"));
