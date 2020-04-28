import spiralOrder from 'src/数据结构和算法/螺旋矩阵';

test(`spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])`, () => {
  expect(
    spiralOrder([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]),
  ).toStrictEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
});
