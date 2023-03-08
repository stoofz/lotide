const assertArraysEqual = require('./assertArraysEqual');

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
