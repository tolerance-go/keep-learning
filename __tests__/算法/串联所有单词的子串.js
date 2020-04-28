const findSubstring = require("../../src/数据结构和算法/串联所有单词的子串");

test(`findSubstring("barfoothefoobarman", ["foo", "bar"])`, () => {
  expect(findSubstring("barfoothefoobarman", ["foo", "bar"])).toStrictEqual([
    0,
    9,
  ]);
});
