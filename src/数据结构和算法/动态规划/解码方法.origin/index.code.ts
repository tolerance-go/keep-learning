/**
 * 如果 s[i] 自己作为一个解，那么 dp[i] = dp[i] + dp[i - 1]
 * 如果 s[i] 和前面一个字符组合成为一个解，那么 dp[i] = dp[i] + dp[i - 2]
 * dp[i] = dp[i - 1] + dp[i - 2] + dp[i]
 * 但是有些限制条件
 *
 * @param {string} s
 * @return {number}
 */
const numDecodings = (s) => {
  if (s[0] == 0) {
    return 0;
  }
  const n = s.length;
  const dp = new Array(n + 1).fill(0);
  dp[0] = dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    if (s[i - 1] != 0) {
      dp[i] += dp[i - 1];
    }
    if (s[i - 2] == 1 || (s[i - 2] == 2 && s[i - 1] <= 6)) {
      dp[i] += dp[i - 2];
    }
  }
  return dp[n];
};

export default numDecodings;
