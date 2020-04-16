const strStr = require("../src/算法/实现strStr()");

test(`strStr("hello", "ll")`, () => {
  expect(strStr("hello", "ll")).toStrictEqual(2);
});
