const add = require('./calc');

test('String calculator', () => {
  expect(add("")).toBe(0);
  expect(add("10")).toBe(10);
});