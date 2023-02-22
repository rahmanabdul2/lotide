const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = takeUntil;




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