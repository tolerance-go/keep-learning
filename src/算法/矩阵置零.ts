/**
给定一个 m x n 的矩阵，如果一个元素为 0，则将其所在行和列的所有元素都设为 0。请使用原地算法。

示例 1:

输入: 
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
输出: 
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
示例 2:

输入: 
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
输出: 
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
进阶:

一个直接的解决方案是使用  O(mn) 的额外空间，但这并不是一个好的解决方案。
一个简单的改进方案是使用 O(m + n) 的额外空间，但这仍然不是最好的解决方案。
你能想出一个常数空间的解决方案吗？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/set-matrix-zeroes
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 如果 m[i][j] === 0，我们就将 m[0][j] 和 m[i][0] 设置为 0，稍后我们将行首和列首为 0 的
 * 全部设置为 0，需要注意第一行和第一列共用的都是 m[0][0]，所以我们从 m[0][1] 开始遍历，
 * 对第一列是否清空设置一个标记量，m[0][0] 还是用来表示第一行，然后我们从第 m[1][1] 开始遍历
 * 根据行和列首的标记量设置单元格
 *
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = (matrix) => {
  let isCol = false;

  for (let i = 0; i < matrix.length; i++) {
    // 这里要在外面执行
    if (matrix[i][0] === 0) {
      isCol = true;
    }
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  // 这里要在之前执行，不然所有单元格都设置为 0 了
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][0] == 0 || matrix[0][j] == 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if (matrix[0][0] === 0) {
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[0][i] = 0;
    }
  }
  if (isCol) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0;
    }
  }
};

export default setZeroes;
