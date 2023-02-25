const eqArrays = function(array1, array2) {
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

// Recursion Version
/*
const flatten = function(array) {
  let flatArray = [];
  for (const x in array) {
    if (Array.isArray(array[x])) {
      for (const y in array[x]) {
        flatArray.push(array[x][y]);
        if (Array.isArray(array[x][y])) {
          flatArray = flatten(flatArray);
        }
      }
      continue;
    }
    flatArray.push(array[x]);
  }
  return flatArray;
};
*/

// No Recursion
const flatten = function(array) {
  const flatArray = [];
  for (const x in array) {
    if (Array.isArray(array[x])) {
      for (const y in array[x]) {
        flatArray.push(array[x][y]);
      }
      continue;
    }
    flatArray.push(array[x]);
  }
  return flatArray;
};

// Test Cases
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6], [7, 8], 9]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
assertArraysEqual(flatten([1, 2, [3, 4], [5, 6], 7, 8, 9]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);

// Recursion Test Cases
// console.log(flatten([1, 2, [3, 4], [5, [6, 7, [8, 9]]]]));
// console.log(flatten([[1,[2, [3, 4]], [5, [6, 7, [8, 9]]]]]));
// assertArraysEqual(flatten([1, 2, [3, 4], [5, [6, 7, [8, 9]]]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);

