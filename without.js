const assertArraysEqual = require('./assertArraysEqual');


// Implement without which will return a subset of a given array, removing unwanted elements.
// should take in a SOURCE array and a itemsToRemove array

const without = function(source, itemsToRemove) {
  // must return a new ARRAY.
  let output = [];

  // Loop thru the array (C-loop)
  for (let i = 0; i < source.length; i++) {
    if (source[i] !== itemsToRemove[i]) {
      output.push(source[i]);
    }
  }
  return output;
};



module.exports = without;



/////////// TEST CODES
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ['1', '2']); // => ["1", "2"]



const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(without(words, ["hello"]), ['world', 'lighthouse']);