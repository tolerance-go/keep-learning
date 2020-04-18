/**
 * 给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。

示例 1:

输入: "(()"
输出: 2
解释: 最长有效括号子串为 "()"
示例 2:

输入: ")()())"
输出: 4
解释: 最长有效括号子串为 "()()"

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-valid-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * stack[i]永远是stack[i+1]有效括号下标的前一个
 *
 * 0. 将 -1 作为默认栈顶
 * 1. 发现左括号，将其下标入栈
 * 2. 发现右括号，弹出栈顶元素，将当前右括号元素下标和弹出后栈顶元素内容相减
 * 3. 如果弹出栈顶后，栈为空，则将该下标入栈
 *
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  if (!s) return 0;
  const stack = [-1];
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    if (letter === "(") {
      stack.push(i);
    }
    if (letter === ")") {
      stack.pop();
      if (stack.length === 0) {
        stack.push(i);
      } else {
        max = Math.max(i - stack[stack.length - 1], max);
      }
    }
  }
  return max;
};

module.exports = longestValidParentheses;
