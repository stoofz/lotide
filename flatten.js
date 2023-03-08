const assertArraysEqual = require('./assertArraysEqual');

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

