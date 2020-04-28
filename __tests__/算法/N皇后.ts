import solveNQueens from 'src/数据结构和算法/回溯/N皇后';

test(`solveNQueens(4)`, () => {
  expect(solveNQueens(4)).toStrictEqual([
    ['.Q..', '...Q', 'Q...', '..Q.'],
    ['..Q.', 'Q...', '...Q', '.Q..'],
  ]);
});
