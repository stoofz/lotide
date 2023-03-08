const assertEqual = require('./assertEqual');

const countLetters = function(sentanceString) {
  const countResult = {};
  const spacesRemoved = sentanceString.replaceAll(" ", "");
  for (let i = 0; i < spacesRemoved.length; i++) {
    if (countResult[spacesRemoved[i]] === undefined) {
      countResult[spacesRemoved[i]] = 1;
      continue;
    }
    countResult[spacesRemoved[i]]++;
  }
  return countResult;
};

// Test Cases

const result = countLetters('LHL');
assertEqual(result["L"], 2);
assertEqual(result["H"], 1);