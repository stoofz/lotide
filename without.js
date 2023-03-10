const without = function(source, itemsToRemove) {
  
  const cleanArray = [];

  for (let x = 0; x < source.length; x++) {
    let valueFound = false;
    for (let y = 0; y < itemsToRemove.length; y++) {
      if (source[x] === itemsToRemove[y]) {
        valueFound = true;
        break;
      }
    }
    if (valueFound === false) {
      cleanArray.push(source[x]);
    }
  }
  return cleanArray;
};

module.exports = without;