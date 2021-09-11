const { expect, test } = require('@jest/globals');
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
    expect(add("1\n2,3")).toBe(6);
    expect(add("1,2\n3")).toBe(6);
    expect(add("1\n2,3\n1\n2,3")).toBe(12);
});

test('Step 4: Support different delimiters', () => {
    expect(add("//;\n10;3")).toBe(13);
    expect(add("//;\n1\n2;3\n1\n2;3")).toBe(12);
    const numbers = "//|\n1\n2|3\n1\n2|3";
    if (numbers.startsWith('//')){
        expect(numbers).toMatch(/^\/{2}.\n/);
        expect(add(numbers)).toBe(12);
    }
});

test('Step 5: negative numbers', () => {
    expect(() => add("10,-3")).toThrow('negatives not allowed: -3');
    expect(() => add("10,-3,2,5,-6,1")).toThrow('negatives not allowed: -3,-6');
});

test('Step 6: ignore big numbers', () => {
    expect(add("10,3,1001")).toBe(13);
    expect(add("1,2005,3,1000,2")).toBe(1006);
    expect(add("1001")).toBe(0);
});

test('Step 7: delimiters length', () => {
    expect(add("//[***]\n1***2***3")).toBe(6);
    expect(add("//[||]\n1\n2||3\n1\n2||3")).toBe(12);
});