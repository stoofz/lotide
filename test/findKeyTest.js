const assert = require('chai').assert;
const { findKey } = require("../index");

describe("#findKey", () => {
  
  it("returns the key noma from object, which is the first key to have a value of 2", () => {
    assert.deepEqual(findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri": { stars: 3 },
      "noma": { stars: 2 },
      "elBulli": { stars: 3 },
      "Ora": { stars: 2 },
      "Akelarre": { stars: 3 }
    }, x => x.stars === 2), "noma");
  });
  
  it("returns the key Akaleri from object, which is the first key to have a value of 3", () => {
    assert.deepEqual(findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri": { stars: 3 },
      "noma": { stars: 2 },
      "elBulli": { stars: 3 },
      "Ora": { stars: 2 },
      "Akelarre": { stars: 3 }
    }, x => x.stars === 3), "Akaleri");
  });

  it("returns the key undefined from object when value can't be found", () => {
    assert.deepEqual(findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri": { stars: 3 },
      "noma": { stars: 2 },
      "elBulli": { stars: 3 },
      "Ora": { stars: 2 },
      "Akelarre": { stars: 3 }
    }, x => x.stars === 5), undefined);
  });

});
