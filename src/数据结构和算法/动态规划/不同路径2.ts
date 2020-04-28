/**
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/unique-paths-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 和上一题类似，需要注意的是当 grid[i][j] === 1 也就是存在障碍物当时候，将 dp[i][j] 设置为 0，
 * 也就不会对右面和下面 dp 路径数量产生贡献
 *
 * 需要注意，如果第一格子是炸弹，返回 0
 *
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles = (obstacleGrid) => {
  const grid = obstacleGrid;
  const rn = obstacleGrid.length;
  const cn = obstacleGrid[0].length;
  const dp = Array.from(Array(rn), () => Array(cn));

  if (grid[0][0] === 1) {
    return 0;
  }

  for (let r = 0; r < rn; r++) {
    for (let c = 0; c < cn; c++) {
      if (r === 0 && c === 0) {
        dp[r][c] = 1;
      } else if (r === 0) {
        dp[0][c] = dp[0][c - 1] === 1 && grid[0][c] === 0 ? 1 : 0;
      } else if (c === 0) {
        dp[r][0] = dp[r - 1][0] === 1 && grid[r][0] === 0 ? 1 : 0;
      } else {
        dp[r][c] = grid[r][c] === 1 ? 0 : dp[r - 1][c] + dp[r][c - 1];
      }
    }
  }

  return dp[rn - 1][cn - 1];
};

export default uniquePathsWithObstacles;
