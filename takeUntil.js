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

module.exports = takeUntil;