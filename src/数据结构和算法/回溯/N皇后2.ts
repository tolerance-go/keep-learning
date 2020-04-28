/**
n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。



上图为 8 皇后问题的一种解法。

给定一个整数 n，返回 n 皇后不同的解决方案的数量。

示例:

输入: 4
输出: 2
解释: 4 皇后问题存在如下两个不同的解法。
[
 [".Q..",  // 解法 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // 解法 2
  "Q...",
  "...Q",
  ".Q.."]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/n-queens-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 每一行或者每一列只能有一个 Q 所以按照列来进行遍历
 *
 * @param {number} n
 * @return {string[][]}
 */
const totalNQueens = (n) => {
  // row 下面的行还没填充，所以不用管
  const isValid = (board, n, row, col) => {
    for (let i = 0; i < n; i++) {
      // 判断同列
      if (board.get('' + i + col)) {
        return false;
      }
    }

    // 斜率为 1
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board.get('' + i + j)) {
        return false;
      }
    }

    // 斜率为 -1
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board.get('' + i + j)) {
        return false;
      }
    }

    return true;
  };

  const backtrack = (boardMap, n, row, res) => {
    if (row === n) {
      res.push(true);
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isValid(boardMap, n, row, col) === false) {
        continue;
      }

      boardMap.set('' + row + col, true);
      backtrack(boardMap, n, row + 1, res);
      boardMap.set('' + row + col, false);
    }
  };

  const res = [];
  const boardMap = new Map();
  backtrack(boardMap, n, 0, res);
  return res.length;
};

export default totalNQueens;
