// map function will take in two arguments: Array, callback 

const words = ["ground", "control", "to", "major", "tom"];

const myOwnMap = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


const output = myOwnMap(words, function(word) { // anonymous function takes a word (item)
  return word[0]; // takes word as argument and returns the first letter
});



//// TEST CODES
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


const assertArrayEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertation Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertation Failed: ${arr1} !== ${arr2}`);
  }
};


assertArrayEqual(output, ['g', 'c', 't', 'm', 't']); // Passed