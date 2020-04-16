const isMatch = require("../src/动态规划/正则表达式匹配");

test(`isMatch('abc', 'a*c')`, () => {
  expect(isMatch("abc", "a*c")).toStrictEqual(false);
});
