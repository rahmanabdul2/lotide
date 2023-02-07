const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`Assertation Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`Assertation Failed: ${arr1} !== ${arr2}`);
  }
};



const eqArrays = function(arr1, arr2) {
  // do they have the same length? If not
  if (arr1.length !== arr2.length) {
    return false;
  }
  // do they have the same values? If not
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


// Implement without which will return a subset of a given array, removing unwanted elements.
// should take in a SOURCE array and a itemsToRemove array

const without = function(source, itemsToRemove) {
  // must return a new ARRAY.
  let output = [];

  // Loop thru the array
  for (let i = 0; i < source.length; i++) {
    if (source[i] !== itemsToRemove[i]) {
      output.push(source[i]);
    }
  }
  return output;
};





/////////// TEST CODES
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ['1', '2']); // => ["1", "2"]



const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(without(words, ["hello"]), ['world', 'lighthouse']);