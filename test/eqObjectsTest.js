const assert = require('chai').assert;
const { eqObjects } = require("../index");

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

describe("#eqObjects", () => {
  
  it("returns true, if both shirtObject's both have sizes medium and color red", () => {
    assert.strictEqual(eqObjects(shirtObject , anotherShirtObject), true);
  });

  it("returns false, longsleeveShirtObject has an extra key value of sleeveLength not in shirtObject", () => {
    assert.strictEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
  });

  it("returns true, if both multiColorShirtObject's have colors red, blue and are size medium", () => {
    assert.strictEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
  });

  it("returns false, longSleeveMultiColorShirtObjects has additional sleeveLength parameter not in multiColorShirtObject ", () => {
    assert.strictEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false);
  });

});