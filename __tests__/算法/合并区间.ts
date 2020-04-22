import merge from 'src/算法/合并区间';

test(`merge([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
])`, () => {
  expect(
    merge([
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ]),
  ).toStrictEqual([
    [1, 6],
    [8, 10],
    [15, 18],
  ]);
});
