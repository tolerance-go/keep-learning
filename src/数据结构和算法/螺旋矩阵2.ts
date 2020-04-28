/**
给定一个正整数 n，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。

示例:

输入: 3
输出:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/spiral-matrix-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 从外层向里层一层一层的放
 *
 * @param {number} n
 * @return {number[][]}
 */
const generateMatrix = (n) => {
  const matrix = Array.from(Array(n), () => Array(n).fill(null));
  // 定义 4 个标记量
  let c1 = 0,
    c2 = n - 1,
    r1 = 0,
    r2 = n - 1;
  let count = 1;
  const total = n * n;
  while (count <= total) {
    // top & left to right
    for (let c = c1; c <= c2; c++) {
      matrix[r1][c] = count++;
    }
    r1++;
    // right & top to bottom
    for (let r = r1; r <= r2; r++) {
      matrix[r][c2] = count++;
    }
    c2--;
    // bottom & right to left
    for (let c = c2; c >= c1; c--) {
      matrix[r2][c] = count++;
    }
    r2--;
    // left & bottom to top
    for (let r = r2; r >= r1; r--) {
      matrix[r][c1] = count++;
    }
    c1++;
  }

  return matrix;
};

export default generateMatrix;
