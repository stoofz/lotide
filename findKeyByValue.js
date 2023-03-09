const findKeyByValue = function(object, showName) {
  for (const showType of Object.keys(object)) {
    if (showName === object[showType]) {
      return showType;
    }
  }
};

module.exports = findKeyByValue;