const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  const passed = String.fromCodePoint(0x2705, 0x2705, 0x2705);
  const failed = String.fromCodePoint(0x274C, 0x274C, 0x274C);
  if (eqArrays(array1, array2)) {
    return console.log(`${passed} Assertion Passed: ${array1} === ${array2}`);
  }
  return console.log(`${failed} Assertion Failed: ${array1} !== ${array2}`);
};

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

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

