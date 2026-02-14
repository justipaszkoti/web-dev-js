const { addNumbers } = require('../scripts/script.js');

test('adds two positive numbers', () => {
  expect(addNumbers(2, 3)).toBe(5);
});

test('adds negative numbers', () => {
  expect(addNumbers(-2, -4)).toBe(-6);
});

test('adds mixed sign numbers', () => {
  expect(addNumbers(10, -3)).toBe(7);
});
