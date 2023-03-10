const assert = require('chai').assert;
const { map } = require("../index");

const words = ["Pool", "on", "the", "roof", "must", "have", "a", "leak"];

describe("#map", () => {

  it("returns ['P', 'o', 't', 'r', 'm', 'h', 'a', 'l'] for word[0] of ['Pool', 'on', 'the', 'roof', 'must', 'have', 'a', 'leak']" , () => {
    assert.deepEqual(map(words, word => word[0]), ['P', 'o', 't', 'r', 'm', 'h', 'a', 'l']);
  });

  it("returns 'Pool foo on foo the foo roof foo must foo have foo a foo leak foo' for word + foo of ['Pool', 'on', 'the', 'roof', 'must', 'have', 'a', 'leak'] " , () => {
    assert.deepEqual((map(words, word => word + " foo")).join(" "), ("Pool foo on foo the foo roof foo must foo have foo a foo leak foo"));
  });

  it("returns [4, 2, 3, 4, 4, 4, 1, 4] of word.length of ['Pool', 'on', 'the', 'roof', 'must', 'have', 'a', 'leak']" , () => {
    assert.deepEqual(map(words, word => word.length), [4, 2, 3, 4, 4, 4, 1, 4]);
  });

  it("returns Pool on the roof must NOT HAVE a leak for replacing have with NOT HAVE of ['Pool', 'on', 'the', 'roof', 'must', 'have', 'a', 'leak'] " , () => {
    assert.deepEqual(map(words, word => {
      if (word === "have") {
        return "NOT HAVE";
      }
      return word;
    }).join(" "), ("Pool on the roof must NOT HAVE a leak"));
  });

});