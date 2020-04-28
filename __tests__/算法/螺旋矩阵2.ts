import generateMatrix from 'src/数据结构和算法/螺旋矩阵2';

test(`generateMatrix(3)`, () => {
  expect(generateMatrix(3)).toStrictEqual([
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5],
  ]);
});
