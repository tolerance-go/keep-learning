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
 * 定义 window 记录窗口里面所有字符出现的次数，定义 needs 定义 t 单词所有字母出现的次数
 * 有 l，r 2个指针去遍历 s，r 是快指针，只要下一个元素在 needs 里面，就移动一位，如果 windows 里面
 * 出现了所有 needs 出现的单词，l 开始移动，保证 windows 里出现所有 needs 单词的前提下，去除重复，更新
 * 最小长度
 *
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = (s, t) => {
  let l = 0,
    r = 0,
    minLen = Number.MAX_SAFE_INTEGER;
  let match = 0;
  const window = {};
  const needs = {};
  for (let i = 0; i < t.length; i++) {
    needs[t[i]] ? needs[t[i]]++ : (needs[t[i]] = 1);
  }
  console.log(needs);
  const needsLen = Object.keys(needs).length;
  let start = 0;
  while (r < s.length) {
    const char = s[r];
    if (needs[char]) {
      window[char] ? window[char]++ : (window[char] = 1);
      // needs 只会递增
      if (window[char] === needs[char]) {
        match++;
      }
    }
    r++;
    while (match === needsLen) {
      if (r - l < minLen) {
        minLen = r - l;
        start = l;
      }
      const c = s[l];
      if (needs[c]) {
        window[c]--;
        if (window[c] < needs[c]) {
          match--;
        }
      }
      l++;
    }
  }

  return minLen === Number.MAX_SAFE_INTEGER ? '' : s.substr(start, minLen);
};

export default minWindow;
