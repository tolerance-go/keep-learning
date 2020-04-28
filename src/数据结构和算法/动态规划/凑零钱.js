/**
 * 先看下题目：给你 k 种面值的硬币，面值分别为 c1, c2 ... ck，每种硬币的数量无限，再给一个总金额 amount，问你最少需要几枚硬币凑出这个金额，如果不可能凑出，算法返回 -1 。算法的函数签名如下：
 */

const coinChange = (coins, amount) => {
  // 数组大小为 amount + 1，初始值也为 amount + 1
  const dp = Array.from(Array(amount + 1), () => amount + 1);
  // base case
  dp[0] = 0;
  for (let i = 0; i < dp.length; i++) {
    // 内层 for 在求所有子问题 + 1 的最小值
    for (let coin of coins) {
      // 子问题无解，跳过
      if (i - coin < 0) continue;
      dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
    }
  }
  return dp[amount] > amount ? -1 : dp[amount];
};

module.exports = coinChange;
