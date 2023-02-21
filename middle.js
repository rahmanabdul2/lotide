const assertArraysEqual = require('./assertArraysEqual');



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




module.exports = middle;

