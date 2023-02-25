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

/*
const without = function(source, itemsToRemove) {
  let cleanArray = source;

  for (let x = 0; x < itemsToRemove.length; x++) {
    for (let y = 0; y < source.length; y++) {
      if (source[y] !== itemsToRemove[x]) {
        continue;
      }

      cleanArray = cleanArray.filter(function(removeValue) {
        return removeValue !== source[y];
      });

    }
  }
  return console.log(cleanArray);
};
*/

const without = function(source, itemsToRemove) {
  
  const cleanArray = [];

  for (let x = 0; x < source.length; x++) {
    let valueFound = false;
    for (let y = 0; y < itemsToRemove.length; y++) {
      if (source[x] === itemsToRemove[y]) {
        valueFound = true;
        break;
      }
    }
    if (valueFound === false) {
      cleanArray.push(source[x]);
    }
  }
  return cleanArray;
};

// Test Cases
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(["1", 2, "3"], ["1", "2", "3"]), [2]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
