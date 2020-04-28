import permuteUnique from 'src/数据结构和算法/回溯/全排列2';

test('permuteUnique([1, 1, 2])', () => {
  expect(permuteUnique([1, 1, 2])).toStrictEqual([
    [1, 1, 2],
    [1, 2, 1],
    [2, 1, 1],
  ]);
});
