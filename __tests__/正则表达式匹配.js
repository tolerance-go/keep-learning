const isMatch = require("../正则表达式匹配");

test(`isMatch('abc', 'a*c')`, () => {
  expect(isMatch("abc", "a*c")).toBe(false);
});
