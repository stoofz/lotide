const assert = require('chai').assert;
const { without } = require("../index");

describe("#without", () => {

  it("returns [2, 3] removes [1] from [1, 2, 3]" , () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });

  it("returns ['1', '2'] removes [1, 2, '3'] from ['1', '2', '3']" , () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });

  it("returns [2] removes ['1', '2', '3'] from ['1', 2, '3']" , () => {
    assert.deepEqual(without(["1", 2, "3"], ["1", "2", "3"]), [2]);
  });


});