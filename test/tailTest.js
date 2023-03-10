const assert = require('chai').assert;
const { tail } = require("../index");

const resultOne = tail(["Hello", "Lighthouse", "Labs"]);
const resultTwo = tail(["Hello"]);
const resultThree = tail([]);

describe("#tail", () => {

  it('returns 2 for result.length of ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(resultOne.length, 2);
  });

  it('returns Lighthouse as first elemet of ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(resultOne[0], "Lighthouse");
  });

  it('returns Labs as second elemet ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(resultOne[1], "Labs");
  });

  it('returns an empty array for its tail from an array with one element, ["Hello"]', () => {
    assert.strictEqual(resultTwo.length, 0);
  });

  it("returns an empty array for its tail from an empty array, []", () => {
    assert.strictEqual(resultThree.length, 0);
  });

});