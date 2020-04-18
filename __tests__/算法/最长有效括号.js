const longestValidParentheses = require("../../src/算法/最长有效括号");

test(`longestValidParentheses('(()')`, () => {
  expect(longestValidParentheses("(()")).toStrictEqual(2);
});
