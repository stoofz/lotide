const assert = require('chai').assert;
const { flatten } = require("../index");

describe("#flatten", () => {

  it("returns [1, 2, 3, 4, 5, 6, 7, 8, 9] for [1,[2, [3, 4]], [5, [6, 7, [8, 9]]]]]" , () => {
    assert.deepEqual(flatten([[1,[2, [3, 4]], [5, [6, 7, [8, 9]]]]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("returns [1, 2, 3, 4, 5, 6, 7, 8, 9] for [1, 2, [3, 4], [5, [6, 7, [8, 9]]]]" , () => {
    assert.deepEqual(flatten([1, 2, [3, 4], [5, [6, 7, [8, 9]]]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("returns [1, 2, 3, 4, 5, 6, 7, 8, 9] for [1, 2, [3, 4], [5, [6, 7, [8, 9]]]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], [5, [6, 7, [8, 9]]]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

});