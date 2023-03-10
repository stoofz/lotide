const assert = require('chai').assert;
const { takeUntil } = require("../index");

describe("#takeUntil", () => {

  it("returns [ 1, 2, 5, 7, 2 ] takes until x < 0 of [1, 2, 5, 7, 2, -1, 2, 4, 5]" , () => {
    assert.deepEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [ 1, 2, 5, 7, 2 ]);
  });

  it("returns ['I\'ve', 'been', 'to', 'Hollywood'] takes until ',' from ['I\'ve', 'been', 'to', 'Hollywood', ',', 'I\'ve', 'been', 'to', 'Redwood'] " , () => {
    assert.deepEqual(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','), ["I've", "been", "to", "Hollywood"]);
  });
  
  it("returns ['Three', 'Four', 'Five'] takes until word.length equals 3 from ['Three', 'Four', 'Five', 'Six', 'Seven', 'Ten']" , () => {
    assert.deepEqual(takeUntil(["Three", "Four", "Five", "Six", "Seven", "Ten"], x => x.length === 3), ["Three", "Four", "Five"]);
  });

});