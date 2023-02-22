const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

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

assertArrayEqual(output, ['g', 'c', 't', 'm', 't']); // Passed