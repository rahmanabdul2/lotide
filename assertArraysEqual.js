const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    // console.log("Arrays not equal length")
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i]) && (eqArrays(array1[i], array2[i]) === false)) {
      // if it is an array && the arrays are not equal then return false;
      return false;
    }
    if (!(Array.isArray(array1[i])) && array1[i] !== array2[i]) {
      // if the element is not an array and the items are not equal then return false
      return false;
    }
  }
  return true;
};








// the arrays must be the exact same
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertation Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertation Failed: ${arr1} !== ${arr2}`);
  }
};










/////////////// TEST CODES
assertArraysEqual([1,2,3],[1,2,3]); // Pass
assertArraysEqual([5,3,6,4],[3,4,5,6]); // Fail
assertArraysEqual(['Hello','Lighthouse', 'Labs'],["Hello", 'Lighthouse', 'Labs']); // Pass