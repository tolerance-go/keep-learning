const myAtoi = require("../../src/数据结构和算法/字符串转换整数");

test(`myAtoi('42')`, () => {
  expect(myAtoi("42")).toStrictEqual(42);
});

test(`myAtoi('  -42')`, () => {
  expect(myAtoi("  -42")).toStrictEqual(-42);
});
