import setZeroes from 'src/数据结构和算法/矩阵置零';

test(`[
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
]`, () => {
  const matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];
  setZeroes(matrix);
  expect(matrix).toStrictEqual([
    [1, 0, 1],
    [0, 0, 0],
    [1, 0, 1],
  ]);
});
