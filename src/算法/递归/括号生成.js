/**
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

 

示例：

输入：n = 3
输出：[
       "((()))",
       "(()())",
       "(())()",
       "()(())",
       "()()()"
     ]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/generate-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = [];
  const dfs = (s, left, right) => {
    if (left === n && right === n) return res.push(s);
    if (left < n) dfs(s + "(", left + 1, right);
    if (right < left) dfs(s + ")", left, right + 1);
  };
  dfs("", 0, 0);
  return res;
};

module.exports = generateParenthesis;
