/**
 * 编写一个程序，通过已填充的空格来解决数独问题。

一个数独的解法需遵循如下规则：

数字 1-9 在每一行只能出现一次。
数字 1-9 在每一列只能出现一次。
数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
空白格用 '.' 表示。



一个数独。



答案被标成红色。

Note:

给定的数独序列只包含数字 1-9 和字符 '.' 。
你可以假设给定的数独只有唯一解。
给定数独永远是 9x9 形式的。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/sudoku-solver
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

/**
 * 逐行，从左到右，在每一个位置上试探1-9，成功就进入下一个位置，失败就取消本次选择，做下一个选择
 * 当前行试探完毕就换行，知道换到最后一行
 */
var solveSudoku = function (board) {
  const isValid = (board, row, col, char) => {
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === char) return false;
      if (board[i][col] === char) return false;
      if (
        board[Math.floor(row / 3) * 3 + Math.floor(i / 3)][
          Math.floor(col / 3) * 3 + (i % 3)
        ] === char
      )
        return false;
    }
    return true;
  };

  const backtrack = (board, row, col) => {
    if (col === 9) {
      return backtrack(board, row + 1, 0);
    }
    if (row === 9) {
      return true;
    }
    if (board[row][col] !== ".") {
      return backtrack(board, row, col + 1);
    }

    for (let i = 1; i <= 9; i++) {
      const letter = String(i);
      if (!isValid(board, row, col, letter)) {
        continue;
      }
      board[row][col] = letter;
      // 进行下一步试探，如果有效，说明本次也是有效的
      if (backtrack(board, row, col + 1)) {
        return true;
      }
      // 否侧撤销本次操作
      board[row][col] = ".";
    }

    return false;
  };

  if (!board || board.length !== 9 || board[0].length !== 9) {
    return false;
  }

  backtrack(board, 0, 0);
  return board;
};

module.exports = solveSudoku;
