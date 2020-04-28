const isValid = require("../../src/数据结构和算法/有效的括号");

test(`isValid("()")`, () => {
  expect(isValid("()")).toStrictEqual(true);
});
