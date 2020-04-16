const strStr = require("../src/实现strStr()");

test(`strStr("hello", "ll")`, () => {
  expect(strStr("hello", "ll")).toStrictEqual(2);
});
