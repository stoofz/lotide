const assert = require('chai').assert;
const { countOnly } = require("../index");

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe("#countOnly", () => {
  
  it("returns 1 for 1 Jason found in firstNames", () => {
    assert.strictEqual(result1["Jason"], 1);
  });

  it("returns undefined for undefined parameter for how many Karima's", () => {
    assert.strictEqual(result1["Karima"], undefined);
  });

  it("returns 2 for 2 Fang's found in firstNames", () => {
    assert.strictEqual(result1["Fang"], 2);
  });

  it("returns undefined for undefined parameter for how many Agouhanna's", () => {
    assert.strictEqual(result1["Agouhanna"], undefined);
  });

});