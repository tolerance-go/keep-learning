/**
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
示例 2：

输入: "cbbd"
输出: "bb"

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-palindromic-substring
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

var longestPalindrome = function (s) {
  if (!s || s.length < 2) {
    return s;
  }

  const len = s.length;
  let start = 0,
    end = 0,
    max = 0;

  const centerTest = (left, right) => {
    while (left >= 0 && right < len && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  };

  for (let i = 0; i < len; i++) {
    const len1 = centerTest(i, i);
    const len2 = centerTest(i, i + 1);
    const maxLen = Math.max(len1, len2);
    if (maxLen > end - start) {
      start = i - ((maxLen - 1) >> 1);
      end = i + (maxLen >> 1);
    }
  }
  return s.substring(start, end + 1);
};

module.exports = longestPalindrome;
