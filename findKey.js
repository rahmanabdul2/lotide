const assertEqual = require('./assertEqual');
// findKey takes an object and a callback > scan the object and return the first key for which callback returns TRUE. 
// if no key is found, then return undefined.
const findKey = function(object, callback) {

  for (let key in object) {
    if (callback(object[key])) { // this is scanning whether the callback returns TRUE for each value of the object key.
      return key; // if TRUE, then return the Key associated with the value.
    }
  }
  return undefined; // this is optional
};


module.exports = findKey;


// callback
const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2); // => "noma"




/////// TEST CODE

assertEqual(result, 'noma'); // PASSED
