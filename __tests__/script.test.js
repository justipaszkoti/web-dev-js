const {
  addNumbers,
  subtractNumbers,
  multiplyNumbers,
  divideNumbers,
} = require('../scripts/script.js');

test('adds two positive numbers', () => {
  expect(addNumbers(2, 3)).toBe(5);
});

test('adds negative numbers', () => {
  expect(addNumbers(-2, -4)).toBe(-6);
});

test('adds mixed sign numbers', () => {
  expect(addNumbers(10, -3)).toBe(7);
});

test('subtracts two positive numbers', () => {
  expect(subtractNumbers(5, 3)).toBe(2);
});

test('subtracts with negative result', () => {
  expect(subtractNumbers(3, 5)).toBe(-2);
});

test('multiplies two positive numbers', () => {
  expect(multiplyNumbers(3, 4)).toBe(12);
});

test('multiplies with zero', () => {
  expect(multiplyNumbers(0, 5)).toBe(0);
});

test('multiplies negative numbers', () => {
  expect(multiplyNumbers(-2, 6)).toBe(-12);
});

test('divides two positive numbers', () => {
  expect(divideNumbers(10, 2)).toBe(5);
});

test('division produces a floating‑point result', () => {
  expect(divideNumbers(7, 2)).toBeCloseTo(3.5);
});

test('throws on division by zero', () => {
  expect(() => divideNumbers(5, 0)).toThrow('Division by zero');
});
