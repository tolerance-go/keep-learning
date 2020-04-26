import subsets from 'src/算法/回溯/子集';

test(`subsets([1, 2, 3])`, () => {
  expect(subsets([1, 2, 3])).toStrictEqual([
    [],
    [1],
    [1, 2],
    [1, 2, 3],
    [1, 3],
    [2],
    [2, 3],
    [3],
  ]);
});
