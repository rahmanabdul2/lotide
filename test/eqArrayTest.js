const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');








// TEST CODES

/////////////// TEST CODES
assertEqual(eqArrays([1, "2", "3"], ["1", "2", '3']), false); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true