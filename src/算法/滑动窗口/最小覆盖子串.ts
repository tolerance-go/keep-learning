/**
 给你一个字符串 S、一个字符串 T，请在字符串 S 里面找出：包含 T 所有字母的最小子串。

示例：

输入: S = "ADOBECODEBANC", T = "ABC"
输出: "BANC"
说明：

如果 S 中不存这样的子串，则返回空字符串 ""。
如果 S 中存在这样的子串，我们保证它是唯一的答案。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/minimum-window-substring
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = (s, t) => {
  const res = '';
  let left = 0,
    right = 0;
  const needs = {};
  const windows = {};
  let match = 0,
    start = 0,
    minLen = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < t.length; i++) {
    needs[t[i]] ? needs[t[i]]++ : (needs[t[i]] = 1);
  }
  const needsLen = Object.keys(needs).length;
  while (right < s.length) {
    const c1 = s[right];
    if (needs[c1]) {
      windows[c1] ? windows[c1]++ : (windows[c1] = 1);
      if (windows[c1] === needs[c1]) {
        match++;
      }
    }
    right++;
    while (match == needsLen) {
      if (right - left < minLen) {
        start = left;
        minLen = right - left;
      }
      const c2 = s[left];
      if (needs[c2]) {
        windows[c2]--;
        if (windows[c2] < needs[c2]) {
          match--;
        }
      }
      left++;
    }
  }
  return minLen === Number.MAX_SAFE_INTEGER ? '' : s.substr(start, minLen);
};

export default minWindow;
