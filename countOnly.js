const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertation Failed: ${actual} !== ${expected}`);
  }
};



// countOnly should take in a collection of items and return counts for a specific subset of those items.

//countOnly will be given an array and an object.
const countOnly = function(allItems, itemsToCount) {
  var result = {};

  // Loop thru allItems
  for (var item of allItems) {

    // if the item from allItems exist within itemToCount (true)
    if (itemsToCount[item]) {
      // if item does not exist then set its value to 1
      if (!result[item]) {
        result[item] = 1;
          // if item exist then count it
      } else {
        result[item] += 1;
      }
    }
  }
  return result;
};








//////////TEST CODE
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1); // pass
assertEqual(result1["Karima"], undefined); // pass
assertEqual(result1["Fang"], 2); // pass
assertEqual(result1["Agouhanna"], undefined); // pass