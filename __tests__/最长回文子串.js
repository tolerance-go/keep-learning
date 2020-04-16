const longestPalindrome = require("../src/算法/最长回文子串");

test(`longestPalindrome`, () => {
  expect(longestPalindrome("babad")).toStrictEqual("aba");
});
