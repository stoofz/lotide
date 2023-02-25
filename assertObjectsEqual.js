const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};


const eqObjects = function (object1, object2) {
  
  const objOne = Object.keys(object1);
  const objTwo = Object.keys(object2);

  if (objOne.length !== objTwo.length) {
    return false;
  }

  for (const prop1 of Object.keys(object1)) {

    if (Array.isArray(object1[prop1])) {
      if (eqArrays(object1[prop1], object2[prop1]) !== false) {
        continue;
      } else {
        return false;
      }
    }

    if (object1[prop1] !== object2[prop1]) {
      return false;
    }
  }
  return true;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const passed = String.fromCodePoint(0x2705, 0x2705, 0x2705);
  const failed = String.fromCodePoint(0x274C, 0x274C, 0x274C);
  
  if (eqObjects(actual, expected)) {
    return console.log(`${passed} Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
  return console.log(`${failed} Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};


// Test Cases

const objA = { a: '1', b: 2 };
const objB = { b: 2, a: '1' };

assertObjectsEqual(objA, objB);