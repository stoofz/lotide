const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') {
      continue;
    } else if (results[sentence[i]] === undefined) {
      results[sentence[i]] = [i];
      continue;
    }
    results[sentence[i]].push(i);
  }
  return results;
};

module.exports = letterPositions;