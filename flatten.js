const flatten = function(array) {
  let flatArray = [];
  for (const x in array) {
    if (Array.isArray(array[x])) {
      for (const y in array[x]) {
        flatArray.push(array[x][y]);
        if (Array.isArray(array[x][y])) {
          flatArray = flatten(flatArray);
        }
      }
      continue;
    }
    flatArray.push(array[x]);
  }
  return flatArray;
};

module.exports = flatten;
