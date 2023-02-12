// takeUntil will return a "slice of the array with elements taken from the beginning".
// the function should keep going until the callback return a Truthy value.
const takeUntil = function(array, callback) {
  let output = [];

  for (let element of array) { // loop thru array
    if (callback(element)) { // if the callback return TRUTHY (true) then return the output
      return output; 
    } else {
      output.push(element); // else put the element into the output array
    }
  }
  return output;
};




/////////////////////
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




///////// TEST CODES
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


  assertArraysEqual(results1, [
    1, 2, 5, 7, 2
 ]); // PASSED