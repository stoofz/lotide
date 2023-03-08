const assert = require('chai').assert;
const { countLetters } = require("../index");

const result = countLetters('LHL');

describe("#countLetters", () => {

  it("returns 2 for having two L's in LHL" , () => {
    assert.deepEqual(result["L"], 2);
  });

  it("returns 1 for having one H in LHL  ", () => {
    assert.deepEqual(result["H"], 1);
  });

});