const lengthOfLongestSubstring = require("../src/算法/无重复字符最长子串");

test(`lengthOfLongestSubstring("aab")`, () => {
  expect(lengthOfLongestSubstring("aab")).toMatchSnapshot();
});
