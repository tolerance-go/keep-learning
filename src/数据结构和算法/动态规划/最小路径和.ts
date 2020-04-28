/**
给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

说明：每次只能向下或者向右移动一步。

示例:

输入:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
输出: 7
解释: 因为路径 1→3→1→1→1 的总和最小。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/minimum-path-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 在 i == 0，或者 j === 0 的时候，最小路径和的路径可以知道就是一条直线
 *
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = (grid) => {
  const rn = grid.length;
  const cn = grid[0].length;

  const dp = Array.from(Array(rn), () => Array(cn));
  for (let r = 0; r < rn; r++) {
    for (let c = 0; c < cn; c++) {
      if (r === 0 && c === 0) {
        dp[r][c] = grid[r][c];
      } else if (r === 0) {
        // -1 这里已经被 第一个 if 拦截了
        dp[r][c] = grid[r][c] + dp[r][c - 1];
      } else if (c === 0) {
        dp[r][c] = grid[r][c] + dp[r - 1][c];
      } else {
        dp[r][c] = grid[r][c] + Math.min(dp[r - 1][c], dp[r][c - 1]);
      }
    }
  }

  return dp[rn - 1][cn - 1];
};

export default minPathSum;
