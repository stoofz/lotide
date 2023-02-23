const assertEqual = function(actual, expected) {
  //console.assert(actual === expected);
  const passed = String.fromCodePoint(0x2705);
  const failed = String.fromCodePoint(0x274C);
  if (actual === expected) {
    return console.log(`${passed}${passed}${passed} Assertion Passed: ${actual} === ${expected}`);
  }
  return console.log(`${failed}${failed}${failed} Assertion Failed: ${actual} !== ${expected}`);
};

assertEqual("Lighthouse", "Lighthouse");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 3);

