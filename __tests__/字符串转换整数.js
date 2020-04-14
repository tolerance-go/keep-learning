const myAtoi = require("../字符串转换整数");

test(`myAtoi('42')`, () => {
  expect(myAtoi("42")).toBe(42);
});

test(`myAtoi('  -42')`, () => {
  expect(myAtoi("  -42")).toBe(-42);
});
