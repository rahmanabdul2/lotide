const eqArrays = require('./eqArrays');

// the arrays must be the exact same
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertation Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertation Failed: ${arr1} !== ${arr2}`);
  }
};



module.exports = assertArraysEqual;


