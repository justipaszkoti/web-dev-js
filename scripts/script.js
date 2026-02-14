/**
 * Adds two numbers together.
 * @param {number} a – first operand.
 * @param {number} b – second operand.
 * @returns {number} The sum of `a` and `b`.
 */
function addNumbers(a, b) {
  return a + b;
}

/**
 * Subtracts the second number from the first.
 * @param {number} a – minuend.
 * @param {number} b – subtrahend.
 * @returns {number} The result of a - b.
 */
function subtractNumbers(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers.
 * @param {number} a – first factor.
 * @param {number} b – second factor.
 * @returns {number} The product a * b.
 */
function multiplyNumbers(a, b) {
  return a * b;
}

/**
 * Divides a by b.
 * @param {number} a – dividend.
 * @param {number} b – divisor.
 * @returns {number} The quotient a / b.
 * @throws {Error} When b is zero.
 */
function divideNumbers(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

// Export for Node/Jest tests (CommonJS) and expose globally for the browser.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    addNumbers,
    subtractNumbers,
    multiplyNumbers,
    divideNumbers,
  };
} else {
  // In the browser, attach to window so it can be used manually.
  window.addNumbers = addNumbers;
  window.subtractNumbers = subtractNumbers;
  window.multiplyNumbers = multiplyNumbers;
  window.divideNumbers = divideNumbers;
}
