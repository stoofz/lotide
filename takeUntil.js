const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array, callback) {
  let finalArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) === false) {
      finalArray.push(array[i]);
      continue;
    }
    return finalArray;
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ], true);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood'], true);

const data3 = ["Three", "Four", "Five", "Six", "Seven", "Ten"];
const results3 = takeUntil(data3, x => x.length === 3);
assertArraysEqual(results3, ["Three", "Four", "Five"], true);
