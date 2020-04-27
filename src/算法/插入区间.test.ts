import insert from './插入区间.code';

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
