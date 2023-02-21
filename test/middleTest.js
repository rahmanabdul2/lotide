const middle = require('../middle'); // returns the expected in an array
const assert = require('chai').assert;



describe("#Codes That Pass", () => {
  it("expect [25, 30] to return for '[10, 25, 30, 40]'", () => {
    assert.deepEqual(middle([10, 25, 30, 40]), [25, 30]); // The assert.deepEqual compares objects and arrays | Pass
  });
  it("expect ['Lighthouse'] to return for '['Hello', 'Lighthouse', 'Labs']'", () => {
    assert.deepEqual(middle(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse']); // Pass
  });
  it("expected [10, 25, 30, 40, 60] to be different than [30]", () => {
    assert.notDeepEqual(middle([10, 25, 30, 40, 60]), [40]); // notEqual (notDeepEqual) will FAIL if actual EQUALs expected; it will PASS if not equal
  });
});


