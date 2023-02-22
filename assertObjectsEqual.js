const eqObjects = require('./eqObjects');


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertation Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertObjectsEqual;

//// TEST CODE
assertObjectsEqual(eqObjects([1, 2, 3], [1, 2, 3]), true); // Pass (TRUE)