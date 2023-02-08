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



// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertation Failed: ${actual} !== ${expected}`);
  }
};

//// TEST CODE
assertObjectsEqual(eqObjects([1, 2, 3], [1, 2, 3]), true); // Pass (TRUE)