/**
 * Adds two numbers together.
 * @param {number} a – first operand.
 * @param {number} b – second operand.
 * @returns {number} The sum of `a` and `b`.
 */
function addNumbers(a, b) {
  return a + b;
}

// Export for Node/Jest tests (CommonJS) and expose globally for the browser.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { addNumbers };
} else {
  // In the browser, attach to window so it can be used manually.
  window.addNumbers = addNumbers;
}
