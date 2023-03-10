const  eqArrays  = require('./eqArrays');

const eqObjects = function(object1, object2) {
  
  const objOne = Object.keys(object1);
  const objTwo = Object.keys(object2);

  if (objOne.length !== objTwo.length) {
    return false;
  }

  for (const prop1 of Object.keys(object1)) {

    if (!Array.isArray(object1[prop1]) && typeof object1[prop1] === 'object') {
      if (eqObjects(object1[prop1], object2[prop1])) {
        continue;
      };
    }

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