const generateParenthesis = require("../../src/数据结构和算法/递归/括号生成");

test("generateParenthesis(3)", () => {
  expect(generateParenthesis(3)).toStrictEqual([
    "((()))",
    "(()())",
    "(())()",
    "()(())",
    "()()()",
  ]);
});
