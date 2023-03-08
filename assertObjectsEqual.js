const { eqObjects } = require('./index');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const passed = String.fromCodePoint(0x2705, 0x2705, 0x2705);
  const failed = String.fromCodePoint(0x274C, 0x274C, 0x274C);
  
  if (eqObjects(actual, expected)) {
    return console.log(`${passed} Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
  return console.log(`${failed} Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

module.exports = assertObjectsEqual;

