const middle = function(array) {
  const middleValues = [];
  if (array.length % 2 === 0 && array.length > 2) {
    middleValues.push(array[array.length / 2] - 1);
    middleValues.push(array[array.length / 2]);
  } else if (array.length % 2 === 1 && array.length > 2) {
    middleValues.push(array[(array.length + 1) / 2 - 1]);
  }
  return middleValues;
};

module.exports = middle;

