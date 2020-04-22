/**
给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。

示例 1:

输入:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
输出: [1,2,3,6,9,8,7,4,5]
示例 2:

输入:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
输出: [1,2,3,4,8,12,11,10,9,5,6,7]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/spiral-matrix
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 从外层一圈，逐步往里走
 *
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = (matrix) => {
  const ans = [];
  if (matrix == null || matrix.length === 0) return ans;
  let r1 = 0,
    r2 = matrix.length - 1,
    c1 = 0,
    c2 = matrix[0].length - 1;

  while (r1 <= r2 && c1 <= c2) {
    // top
    for (let i = c1; i <= c2; i++) ans.push(matrix[r1][i]);
    // right
    for (let i = r1 + 1; i <= r2; i++) ans.push(matrix[i][c2]);

    // 超过 2 行
    if (r1 < r2 && c1 < c2) {
      // bottom
      for (let i = c2 - 1; i >= c1; i--) ans.push(matrix[r2][i]);
      // left
      for (let i = r2 - 1; i > r1; i--) ans.push(matrix[i][c1]);
    }

    r1++;
    r2--;
    c1++;
    c2--;
  }

  return ans;
};

export default spiralOrder;
