const assertArraysEqual = require('../assertArraysEqual');




//// Below are Test Codes:
assertArraysEqual([1,2,3],[1,2,3]); // Pass
assertArraysEqual([5,3,6,4],[3,4,5,6]); // Fail
assertArraysEqual(['Hello','Lighthouse', 'Labs'],["Hello", 'Lighthouse', 'Labs']); // Pass