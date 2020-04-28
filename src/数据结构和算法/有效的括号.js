/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

示例 1:

输入: "()"
输出: true
示例 2:

输入: "()[]{}"
输出: true
示例 3:

输入: "(]"
输出: false
示例 4:

输入: "([)]"
输出: false
示例 5:

输入: "{[]}"
输出: true

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 不同类型的括号使用栈类型数据结构
 * 1. 每次闭合括号如果栈顶部没有对应的开启括号与之对应，则无效
 * 2. 最后栈空间如果有剩余，则无效
 * 3. 同上，如果 s 的长度是奇数，则无效
 *
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const len = s.length;
  if (len % 2 !== 0) return false;
  const res = [];
  for (let i = 0; i < len; i++) {
    const letter = s[i];
    switch (letter) {
      case "{":
      case "[":
      case "(":
        res.push(letter);
        break;
      case "}":
        if (res.pop() !== "{") {
          return false;
        }
        break;
      case "]":
        if (res.pop() !== "[") {
          return false;
        }
        break;
      case ")":
        if (res.pop() !== "(") {
          return false;
        }
        break;
    }
  }

  return res.length === 0;
};

module.exports = isValid;
