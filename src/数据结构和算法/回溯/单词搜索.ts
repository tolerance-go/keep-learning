/**
给定一个二维网格和一个单词，找出该单词是否存在于网格中。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

 

示例:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

给定 word = "ABCCED", 返回 true
给定 word = "SEE", 返回 true
给定 word = "ABCB", 返回 false
 

提示：

board 和 word 中只包含大写和小写英文字母。
1 <= board.length <= 200
1 <= board[i].length <= 200
1 <= word.length <= 10^3

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/word-search
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 从棋盘上每个点开始找，如果这个点四周有可以移动点方向，进一位，如果失败，退回继续尝试，
 * 没有可以移动的位置的话，直接失败
 *
 * 准备四个方向，依次遍历
 *
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function (board, word) {
  const direction = [
    [-1, 0],
    [0, -1],
    [0, 1],
    [1, 0],
  ];
  // 盘面上有多少行
  const m = board.length;
  // 盘面上有多少列
  const n = board[0].length;
  const marked = Array.from(Array(m), () => Array(n).fill(false));

  const inArea = (x, y) => {
    return x >= 0 && x < m && y >= 0 && y < n;
  };

  const dfs = (i, j, start) => {
    if (start === word.length - 1) {
      return word[start] === board[i][j];
    }

    if (board[i][j] === word[start]) {
      marked[i][j] = true;
      for (let k = 0; k < 4; k++) {
        const newX = i + direction[k][0];
        const newY = j + direction[k][1];
        if (inArea(newX, newY) && !marked[newX][newY]) {
          if (dfs(newX, newY, start + 1)) {
            return true;
          }
        }
      }
      marked[i][j] = false;
    }

    return false;
  };

  if (m == 0) {
    return false;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
};

export default exist;
