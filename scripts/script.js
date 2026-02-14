// Adds two numbers together (a + b).
function addNumbers(a, b) {
  return a + b;
}

// Subtracts the second number from the first (a - b).
function subtractNumbers(a, b) {
  return a - b;
}

// Multiplies two numbers (a * b).
function multiplyNumbers(a, b) {
  return a * b;
}

// Divides a by b (a / b). Throws an error if divisor is zero.
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
