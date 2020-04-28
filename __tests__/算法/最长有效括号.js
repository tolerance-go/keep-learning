const longestValidParentheses = require("../../src/数据结构和算法/最长有效括号");

test(`longestValidParentheses('(()')`, () => {
  expect(longestValidParentheses("(()")).toStrictEqual(2);
});
