const assert = require('chai').assert;
const { findKeyByValue } = require("../index");

const bestTVShowsByGenre = {
  scifi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe("#findKeyByValue", () => {
  
  it("returns the key drama for the value of 'The Wire'", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  
  it("returns undefined for the value of 'That 70's Show' (non existant value)", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

  it("returns the key comedy for the value of 'Brooklyn Nine-Nine'", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
  });
  
  it("returns the key scifi for the value of 'The Expanse'", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "scifi");
  });

});


