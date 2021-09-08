const add = require('./calc');

test('Limited string calculator', () => {
  expect(add("")).toBe(0);
  expect(add("10")).toBe(10);
  expect(add("10,3")).toBe(13);
});

test('Unlimited string calculator', () => {
    expect(add("5,3,6,8,11")).toBe(33);
  });