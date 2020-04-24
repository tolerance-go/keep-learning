/**
编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：

每行中的整数从左到右按升序排列。
每行的第一个整数大于前一行的最后一个整数。
示例 1:

输入:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 3
输出: true
示例 2:

输入:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 13
输出: false

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/search-a-2d-matrix
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 *
 *
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
  const rLen = matrix.length;
  if (rLen === 0) return false;
  const cLen = matrix[0].length;

  let l = 0,
    r = rLen * cLen - 1;
  while (l <= r) {
    const mid = (r + l) >> 1;
    const midElement = matrix[Math.floor(mid / cLen)][mid % cLen];
    if (midElement === target) {
      return true;
    } else if (target > midElement) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return false;
};

export default searchMatrix;
