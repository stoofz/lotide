const assert = require('chai').assert;
const { letterPositions } = require("../index");

describe("#letterPositions", () => {

  it("returns letter position 1 for e in hello from object" , () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });

  it("returns letter positions of 2, 3 for l in hello from object" , () => {
    assert.deepEqual(letterPositions("hello").l, [2, 3]);
  });

  it("returns letter position 4 for o in hello from object", () => {
    assert.deepEqual(letterPositions("hello").o, [4]);
  });

});