/**
给定一个仅包含 0 和 1 的二维二进制矩阵，找出只包含 1 的最大矩形，并返回其面积。

示例:

输入:
[
  ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]
]
输出: 6

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/maximal-rectangle
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

import largestRectangleArea from './柱状图中最大的矩形';

/**
 * 复用了上一题的答案 柱状图中最大的矩形
 *
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalRectangle = (matrix) => {
  if (matrix.length === 0) return 0;
  let maxArea = 0;
  const heights = Array(matrix[0].length).fill(0);
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (matrix[r][c] === '1') {
        heights[c]++;
      } else {
        heights[c] = 0;
      }
    }
    maxArea = Math.max(largestRectangleArea(heights), maxArea);
  }
  return maxArea;
};

export default maximalRectangle;
