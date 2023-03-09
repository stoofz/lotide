const findKey = function(object, callback) {
  for (const name of Object.keys(object)) {
    if (callback(object[name]) === true) {
      return name;
    }
  }
  return;
};

module.exports = findKey;