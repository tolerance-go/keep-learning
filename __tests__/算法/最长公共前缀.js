const longestCommonPrefix = require("../../src/数据结构和算法/最长公共前缀");

test(`longestCommonPrefix(["flower","flow","flight"])`, () => {
  expect(longestCommonPrefix(["flower", "flow", "flight"])).toStrictEqual("fl");
});
