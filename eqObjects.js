const assertEqual = require('./assertEqual');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(obj1, obj2) {

  // converts the objects keys into array
  const arrKeys1 = Object.keys(obj1);
  const arrKeys2 = Object.keys(obj2);
  let result = true;

  // if they have the same number of keys
  if (arrKeys1.length !== arrKeys2.length) {
    return false;
  }
  // for of to loop thru array
  for (let key of arrKeys1) {
    //console.log(obj1[key]);
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return result;
};


module.exports = eqObjects;

//// TEST CODE
const ab = { a: "1", b: "2", c: '4' };
const ba = { b: "2", a: "1", c: '5', };
assertEqual(eqObjects(ab, ba), false); // Passed (fales === false)

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // => true