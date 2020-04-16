const longestPalindrome = require("../src/最长回文子串");

test(`longestPalindrome`, () => {
  expect(longestPalindrome("babad")).toStrictEqual("aba");
});
