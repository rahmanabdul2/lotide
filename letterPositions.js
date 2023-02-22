// will return all the indices (zero-based positions) in the string where each character is found.
// multiple numbers may be needed to represent all the places in the string that it shows up.

const letterPositions = function(str) {
  const results = {};
  // Loop thru the str letters
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      if (!results[str[i]]) {    // if it does not exist, assign it to a new array
        results[str[i]] = [];
        // push
        results[str[i]].push(i);
      } else {
        results[str[i]].push(i); // if it does exist, then push it to the exisiting one.
      }
    }
  }
  return results;
};


module.exports = letterPositions;

