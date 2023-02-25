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

// Test Cases
assertArraysEqual([1, 2, 3], [1, 2, 3]); // Pass
assertArraysEqual([1, 3], [1, 2, 3]); // Fail
assertArraysEqual([1, 4, 3], [1, 2, 3]); // Fail
assertArraysEqual([1, 5, 3], [1, 2, 3]); // Fail