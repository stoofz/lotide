const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

const eqObjects = function(object1, object2) {
  
  const objOne = Object.keys(object1);
  const objTwo = Object.keys(object2);

  if (objOne.length !== objTwo.length) {
    return false;
  }

  for (const prop1 of Object.keys(object1)) {

    if (Array.isArray(object1[prop1])) {
      if (eqArrays(object1[prop1], object2[prop1]) !== false) {
        continue;
      }
      return false;
    }

    if (object1[prop1] !== object2[prop1]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;

// Test Cases

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false);
