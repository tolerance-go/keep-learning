import sortColors from 'src/数据结构和算法/二分查找/搜索二维矩阵';

test(`sortColors(
  [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 50],
  ], 
  3,
)`, () => {
  expect(
    sortColors(
      [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 50],
      ],
      3,
    ),
  ).toStrictEqual(true);
});
