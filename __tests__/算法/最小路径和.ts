import minPathSum from 'src/算法/动态规划/最小路径和';

test(`minPathSum([
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
])`, () => {
  expect(
    minPathSum([
      [1, 3, 1],
      [1, 5, 1],
      [4, 2, 1],
    ]),
  ).toStrictEqual(7);
});
