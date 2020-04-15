const longestCommonPrefix = require("../src/最长公共前缀");

test(`longestCommonPrefix(["flower","flow","flight"])`, () => {
  expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
});
