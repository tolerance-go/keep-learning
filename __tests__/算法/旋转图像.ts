import rotate from 'src/算法/旋转图像';

test(`rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
])`, () => {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  rotate(matrix);
  expect(matrix).toStrictEqual([
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3],
  ]);
});
