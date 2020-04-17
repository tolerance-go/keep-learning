const isValid = require("../../src/算法/有效的括号");

test(`isValid("()")`, () => {
  expect(isValid("()")).toStrictEqual(true);
});
