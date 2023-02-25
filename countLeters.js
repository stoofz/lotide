const assertEqual = function(actual, expected) {
  const passed = String.fromCodePoint(0x2705, 0x2705, 0x2705);
  const failed = String.fromCodePoint(0x274C, 0x274C, 0x274C);
  if (actual === expected) {
    return console.log(`${passed} Assertion Passed: ${actual} === ${expected}`);
  }
  return console.log(`${failed} Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(sentanceString) {
  const countResult = {};
  const spacesRemoved = sentanceString.replaceAll(" ", "");
  for (let i = 0; i < spacesRemoved.length; i++) {
    if (countResult[spacesRemoved[i]] === undefined) {
      countResult[spacesRemoved[i]] = 1;
      continue;
    }
    countResult[spacesRemoved[i]]++;
  }
  return countResult;
};

// Test Cases

//console.log(countLetters('LHL'));
//console.log(countLetters("lighthouse in the house"));

const result = countLetters('LHL');
assertEqual(result["L"], 2);
assertEqual(result["H"], 1);