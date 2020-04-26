import combine from 'src/算法/回溯/组合';

test(`combine(4, 2)`, () => {
  expect(combine(4, 2)).toStrictEqual([
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 3],
    [2, 4],
    [3, 4],
  ]);
});
