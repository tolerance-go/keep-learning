const fib = (N) => {
  // dp[i]表示i对应的fib数值
  const dp = Array.from(Array(N + 1), () => 0);

  // 初始值
  dp[1] = dp[2] = 1;
  for (let i = 3; i <= N; i++)
    // 状态转移方程
    dp[i] = dp[i - 1] + dp[i - 2];
  return dp[N];
};

// 空间复杂度降为 O(1)
const fib2 = (n) => {
  if (n == 2 || n == 1) return 1;
  let prev = 1,
    curr = 1;
  for (let i = 3; i <= n; i++) {
    let sum = prev + curr;
    prev = curr;
    curr = sum;
  }
  return curr;
};

module.exports = fib;
