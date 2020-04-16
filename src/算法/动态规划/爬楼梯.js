const { assert } = require("../../utils");
/**
1.爬楼梯

题目描述：

假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。

示例 1：

输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。

1. 1 阶 + 1 阶
2. 2 阶
   示例 2：

输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。

1. 1 阶 + 1 阶 + 1 阶
2. 1 阶 + 2 阶
3. 2 阶 + 1 阶

实现代码：
 */

/**
 * 状态表示
 *  dp[i]表示 i+1 个台阶的方案
 * 状态转移方程
 *  dp[i] = dp[i-1] + dp[i-2]
 *  i 从 2 开始
 * 状态初始值
 *  dp[0] = 1
 *  dp[1] = 2
 *
 * @param {*} n
 */
const climbStairs = (n) => {
  const dp = Array.from(Array(n));
  dp[0] = 1;
  dp[1] = 2;
  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n - 1];
};

module.exports = climbStairs;
