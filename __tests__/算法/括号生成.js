const generateParenthesis = require("../../src/算法/递归/括号生成");

test("generateParenthesis(3)", () => {
  expect(generateParenthesis(3)).toStrictEqual([
    "((()))",
    "(()())",
    "(())()",
    "()(())",
    "()()()",
  ]);
});
