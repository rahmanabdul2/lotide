const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("should returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("should return '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); // If put 5 instead of '5' >>> failed because '5' is not equal to 5 since we are doing "strictEqual"
  });
  it('should return 5 for [5, 6, 7]', () => {
    assert.strictEqual(head([5, 6, 7]), 5); // Pass
  });
  it("should return 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // Pass 
  });
});
