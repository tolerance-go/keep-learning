/**
给定一个字符串 (s) 和一个字符模式 (p) ，实现一个支持 '?' 和 '*' 的通配符匹配。

'?' 可以匹配任何单个字符。
'*' 可以匹配任意字符串（包括空字符串）。
两个字符串完全匹配才算匹配成功。

说明:

s 可能为空，且只包含从 a-z 的小写字母。
p 可能为空，且只包含从 a-z 的小写字母，以及字符 ? 和 *。
示例 1:

输入:
s = "aa"
p = "a"
输出: false
解释: "a" 无法匹配 "aa" 整个字符串。
示例 2:

输入:
s = "aa"
p = "*"
输出: true
解释: '*' 可以匹配任意字符串。
示例 3:

输入:
s = "cb"
p = "?a"
输出: false
解释: '?' 可以匹配 'c', 但第二个 'a' 无法匹配 'b'。
示例 4:

输入:
s = "adceb"
p = "*a*b"
输出: true
解释: 第一个 '*' 可以匹配空字符串, 第二个 '*' 可以匹配字符串 "dce".
示例 5:

输入:
s = "acdcb"
p = "a*c?b"
输入: false

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/wildcard-matching
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 思路：
 * 使用动态规划
 * 状态定义：
 * dp[i][j] 表示 s 的前 i 个字符和 p 的前 j 个字符是否匹配（true 的话表示匹配）
 *
 * 状态转移方程：
 * 1. 当 s[i] === p[j]，或者 p[j] === ? 那么 dp[i][j] = dp[i - 1][j - 1]
 * 2. 当 p[j] === *，那么 dp[i][j] = dp[i][j - 1] || dp[i - 1][j]
 * 其中 dp[i][j - 1] 表示 p[j] 这个 * 代表的是空字符，例如 ab，ab*，我们继续看 ab，ab
 * dp[i - 1][j] 表示 p[j] 这个 * 代表的是非空字符，例如 abcd, ab*，我们继续看 abc，ab*
 * 3. 当 s[i === 0] && p[j] === *，s 为空，与 p 匹配，p 永远匹配的是空字符，所以 dp[0][j] = dp[0][j - 1]
 *
 * 初始化：
 * 1. dp[0][0] 表示空正则匹配空字符，其值为 true
 * 3. 第一列 dp[i][0]，空正则匹配非空字符，全部为 false
 *
 * @param s
 * @param p
 */
const isMatch = (s: string, p: string): boolean => {
  const m = s.length,
    n = p.length;
  const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(false));

  dp[0][0] = true;
  for (let i = 1; i <= n; i++) {
    dp[0][i] = dp[0][i] === '*' && dp[0][i - 1];
    // 注意这里是下标，dp[i][j] 的表示和 s[i - 1]，p[j - 1] 的表示
    // 在位置上是一样的
    if (p[i - 1] === '*') {
      // 始终匹配空字符，看前一位正则的情况
      dp[0][i] = dp[0][i - 1];
    }
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // 注意这里都是下标，注意和 dp[i - 1][j - 1] 前一位的概念区分开来，dp[i][j] 的表示和 s[i - 1]，p[j - 1] 的表示
      // 在位置上是一样的
      if (s[i - 1] === p[j - 1] || p[j - 1] === '?') {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] === '*') {
        dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
      }
    }
  }

  return dp[m][n];
};

export default isMatch;
