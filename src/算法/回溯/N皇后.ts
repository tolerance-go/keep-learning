/**
n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。



上图为 8 皇后问题的一种解法。

给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。

每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。

示例:

输入: 4
输出: [
 [".Q..",  // 解法 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // 解法 2
  "Q...",
  "...Q",
  ".Q.."]
]
解释: 4 皇后问题存在两个不同的解法。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/n-queens
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 每一行或者每一列只能有一个 Q 所以按照列来进行遍历
 *
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = (n) => {
  // row 下面的行还没填充，所以不用管
  const isValid = (board, row, col) => {
    for (let i = 0; i < board.length; i++) {
      // 判断同列
      if (board[i][col] === 'Q') {
        return false;
      }
    }

    // 斜率为 1
    for (
      let i = row - 1, j = col + 1;
      i >= 0 && j < board[0].length;
      i--, j++
    ) {
      if (board[i][j] === 'Q') {
        return false;
      }
    }

    // 斜率为 -1
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') {
        return false;
      }
    }

    return true;
  };

  const backtrack = (board, row, res) => {
    if (row === board.length) {
      const arr = [];
      for (let i = 0; i < board.length; i++) {
        arr.push(board[i].join(''));
      }
      res.push(arr);
      return;
    }

    for (let col = 0; col < board[0].length; col++) {
      if (isValid(board, row, col) === false) {
        continue;
      }

      board[row][col] = 'Q';
      backtrack(board, row + 1, res);
      board[row][col] = '.';
    }
  };

  const res = [];
  const board = Array.from(Array(n), () => Array(n).fill('.'));
  backtrack(board, 0, res);
  return res;
};

export default solveNQueens;
