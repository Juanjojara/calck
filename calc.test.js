const { expect } = require('@jest/globals');
const add = require('./calc');

test('Step 1: Limited string calculator', () => {
  expect(add("")).toBe(0);
  expect(add("10")).toBe(10);
  expect(add("10,3")).toBe(13);
});

test('Step 2: Unlimited string calculator', () => {
    expect(add("5,3,6,8,11")).toBe(33);
    var randArrayNumber = Math.floor(Math.random() * 1000);
    var randNumbers = randArrayNumber.toString();
    var randResult = randArrayNumber;
    for (var i = 0; i < randArrayNumber; i++){
        var newRandNumber = (Math.floor(Math.random() * 100));
        randNumbers = randNumbers + ", " + newRandNumber;
        randResult += newRandNumber;
    }
    expect(add(randNumbers)).toBe(randResult);
});

test('Step 3: Support new line separator', () => {
    expect(add("10\n3")).toBe(13);
  });