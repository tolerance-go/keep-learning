import subsetsWithDup from './子集2';

test(`subsetsWithDup([1, 2, 2])`, () => {
  expect(subsetsWithDup([1, 2, 2])).toStrictEqual([
    [],
    [1],
    [1, 2],
    [1, 2, 2],
    [2],
    [2, 2],
  ]);
});
