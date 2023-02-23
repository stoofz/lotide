const assertEqual = function(actual, expected) {
  const passed = String.fromCodePoint(0x2705, 0x2705, 0x2705);
  const failed = String.fromCodePoint(0x274C, 0x274C, 0x274C);
  if (actual === expected) {
    return console.log(`${passed} Assertion Passed: ${actual} === ${expected}`);
  }
  return console.log(`${failed} Assertion Failed: ${actual} !== ${expected}`);
};

const tail = function(array, n = 1) {
  return array.slice(n);
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
console.log(words);

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
console.log(result);

// Test Case 2: An array with only one element should yield an empty array for its tail
const resultTwo = tail(["Hello"]);
assertEqual(resultTwo.length, 0); // ensure we get back zero elements
console.log(resultTwo);

// Test Case 3: An array with only one element should yield an empty array for its tail
const resultThree = tail([]);
assertEqual(resultThree.length, 0); // ensure we get back zero elements
console.log(resultThree);

