const assertEqual = require('./assertEqual');

// takes in an object and a value. It should scan the object and return the first key which contains the given value. 
// If no key with that given value is found, then it should return undefined.

const findKeyByValue = function(object, value) {

  for (let key in object) {
    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;


///// TEST CODE
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};



assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);