const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]); // Pass
assertArraysEqual([1, 3], [1, 2, 3]); // Fail
assertArraysEqual([1, 4, 3], [1, 2, 3]); // Fail
assertArraysEqual([1, 5, 3], [1, 2, 3]); // Fail