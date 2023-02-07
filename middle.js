const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅Assertation Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑Assertation Failed: ${arr1} !== ${arr2}`);
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



// Implement middle which will take in an array and return the middle-most element(s) of the given array in another array.
const middle = function(array) {
  let middleElement = [];
  let theMiddleIndex = array.length / 2; // if 6 numbers in an array, this equals index 3

  if (array.length === 1 || array.length === 2) {
    middleElement = [];
  } else if (array.length % 2 === 0) {
    middleElement = [array[theMiddleIndex - 1], array[theMiddleIndex]];
  } else {
    middleElement = [array[Math.floor(theMiddleIndex)]]; ///
  }
  return middleElement;
};


// /////////////////// 0  1  2  3  4 ....
// console.log(middle([1, 2, 3, 4, 5]));
// ///////////////////


////////////////////////////// TEST CODES
assertArraysEqual(middle([10, 25, 30, 40]), [25, 30]); // PASS
assertArraysEqual(middle([10, 25, 30, 40, 60]), [25]); // FAIL
assertArraysEqual(middle(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse']); // PASS
assertArraysEqual(middle([10, 25, 30, 40]), [25, 10, 30, 40]); // FAIL