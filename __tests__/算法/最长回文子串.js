const longestPalindrome = require("../../src/数据结构和算法/最长回文子串");

test(`longestPalindrome`, () => {
  expect(longestPalindrome("babad")).toStrictEqual("aba");
});
