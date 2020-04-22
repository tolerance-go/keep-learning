import insert from '../../src/算法/插入区间';

test(`insert(
  [
    [1, 3],
    [6, 9],
  ],
  [2, 5],
)`, () => {
  expect(
    insert(
      [
        [1, 3],
        [6, 9],
      ],
      [2, 5],
    ),
  ).toStrictEqual([
    [1, 5],
    [6, 9],
  ]);
});
