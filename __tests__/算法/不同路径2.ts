import uniquePathsWithObstacles from '../../src/数据结构和算法/动态规划/不同路径2';

test(`uniquePathsWithObstacles([
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
])`, () => {
  expect(
    uniquePathsWithObstacles([
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ]),
  ).toStrictEqual(2);
});
