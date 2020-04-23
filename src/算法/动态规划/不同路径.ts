/**
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

问总共有多少条不同的路径？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/unique-paths
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 这是个杨辉三角形，每个位置的路径 = 该位置左边的路径 + 该位置上边的路径
 *
 * 状态定义：
 * dp[i][j] 表示 dp在横轴 i 纵轴 j 这个位置存在的到达路径是多少
 *
 * 状态转移：
 * dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
 *
 * 状态初始化：
 * dp[0][j] = 1
 * dp[i][0] = 1
 *
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = (m, n) => {
  const dp = Array.from(Array(m), () => Array(n));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i == 0 || j === 0) {
        dp[i][j] = 1;
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }
  return dp[m - 1][n - 1];
};

export default uniquePaths;
