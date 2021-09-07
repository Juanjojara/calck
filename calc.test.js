const add = require('./calc');

test('String calculator', () => {
  expect(add("")).toBe(0);
});