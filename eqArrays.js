const eqArrays = function(array1, array2) {

  for (let x = 0; x < array1.length; x++) {
    if (Array.isArray(array1[x])) {
      for (let y = 0; y < array1[x].length; y++) {
        if (Array.isArray(array1[x][y])) {
          if (eqArrays(array1[x][y], array2[x][y])) {
            return true;
          }
        }
      }
    }
  }

  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i])) {
      for (let q = 0; q < array1.length; q++) {
        if (array1[i][q] !== array2[i][q]) {
          return false;
        }
      }
    } else {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }

  return true;
};

module.exports = eqArrays;
