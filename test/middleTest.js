const middle = require('../middle'); // returns the expected in an array
const assertArraysEqual = require('../assertArraysEqual'); // not going to need this anymore
// const assert = require('chai').assert;








////////////////////////////// TEST CODES
assertArraysEqual(middle([10, 25, 30, 40]), [25, 30]); // PASS
assertArraysEqual(middle([10, 25, 30, 40, 60]), [25]); // FAIL
assertArraysEqual(middle(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse']); // PASS
assertArraysEqual(middle([10, 25, 30, 40]), [25, 10, 30, 40]); // FAIL