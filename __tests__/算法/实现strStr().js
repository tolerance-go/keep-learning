const strStr = require("../../src/数据结构和算法/实现strStr()");

test(`strStr("hello", "ll")`, () => {
  expect(strStr("hello", "ll")).toStrictEqual(2);
});
