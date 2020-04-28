const letterCombinations = require("../../src/数据结构和算法/递归/电话号码的字母组合");

test(`letterCombinations("23")`, () => {
  expect(letterCombinations("23")).toStrictEqual([
    "ad",
    "ae",
    "af",
    "bd",
    "be",
    "bf",
    "cd",
    "ce",
    "cf",
  ]);
});
