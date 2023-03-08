const assertEqual = require('./assertEqual');

const findKey = function(object, callback) {
  for (const name of Object.keys(object)) {
    if (callback(object[name]) === true) {
      return name;
    }
  }
  return;
};


assertEqual(
  findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri": { stars: 3 },
    "noma": { stars: 2 },
    "elBulli": { stars: 3 },
    "Ora": { stars: 2 },
    "Akelarre": { stars: 3 }
  }, x => x.stars === 2), "noma");

assertEqual(
  findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri": { stars: 3 },
    "noma": { stars: 2 },
    "elBulli": { stars: 3 },
    "Ora": { stars: 2 },
    "Akelarre": { stars: 3 }
  }, x => x.stars === 3), "Akaleri");