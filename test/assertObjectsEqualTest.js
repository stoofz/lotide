const assertObjectsEqual = require('../assertObjectsEqual');

const objA = { a: '1', b: 2 };
const objB = { b: 2, a: '1' };

assertObjectsEqual(objA, objB);