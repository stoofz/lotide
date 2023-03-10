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
    assert.deepEqual(eqObjects(shirtObject , anotherShirtObject), true);
  });

  it("returns false, longsleeveShirtObject has an extra key value of sleeveLength not in shirtObject", () => {
    assert.deepEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
  });

  it("returns true, if both multiColorShirtObject's have colors red, blue and are size medium", () => {
    assert.deepEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
  });

  it("returns false, longSleeveMultiColorShirtObjects has additional sleeveLength parameter not in multiColorShirtObject", () => {
    assert.deepEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false);
  });

  it("returns true, { a: { z: 1 }, b: 2 } matches { a: { z: 1 }, b: 2 } ", () => {
    assert.deepEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });

  it("returns false,  { a: { y: 0, z: 1 }, b: 2 } does not match { a: { z: 1 }, b: 2 }", () => {
    assert.deepEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
  });

  it("returns false, { a: { y: 0, z: 1 }, b: 2 } does not match { a: 1, b: 2 }", () => {
    assert.deepEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
  });

  it("returns true, { a: { z: 1, y: 2 }, b: 2 } matches { a: { z: 1, y: 2 }, b: 2 }", () => {
    assert.deepEqual(eqObjects({ a: { z: 1, y: 2 }, b: 2 }, { a: { z: 1, y: 2 }, b: 2 }), true);
  });

  it("returns true, { a: { z: 1, y: { c: 2 } }, b: 2 } matches { a: { z: 1, y: { c: 2 } }, b: 2 }", () => {
    assert.deepEqual(eqObjects({ a: { z: 1, y: { c: 2 } }, b: 2 }, { a: { z: 1, y: { c: 2 } }, b: 2 }), true);
  });
  
});
