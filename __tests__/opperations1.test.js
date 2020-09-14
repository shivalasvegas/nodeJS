const { calculator } = require('../eb_functionOpperations1');

    let opp = "";

test('2 + 3 = 5', () => {
    opp = "add";
  expect(calculator(2, 3, opp)).toBe(5);
});

test('3 * 4 = 12', () => {
    opp = "multiply";
  expect(calculator(3, 4, opp)).toBe(12);
});

test('5 - 6 = -1', () => {
    opp = "subtract";
  expect(calculator(5, 6, opp)).toBe(-1);
});

test('8 / 4 = 2', () => {
    opp = "divide";
  expect(calculator(8, 4, opp)).toBe(2);
});