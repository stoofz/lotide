const assert = require('chai').assert;
const { eqArrays } = require('../index');

describe("#eqArrays", () => {

  it("returns true, [1, 2, 3] equals [1, 2, 3] ", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns false, [1, 2, 3] does not equal [3, 2, 1] ", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });

  it('returns true, ["1", "2", "3"] equals ["1", "2", "3"]', () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });

  it('returns false, ["1", "2", "3"] does not equal ["1", "2", 3]', () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });

  it("returns false, [] does not equal [1, 2, 3]", () => {
    assert.deepEqual(eqArrays([], [1, 2, 3]), false);
  });

});