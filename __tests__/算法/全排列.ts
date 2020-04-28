import permute from 'src/数据结构和算法/回溯/全排列';

test('permute([1, 2, 3])', () => {
  expect(permute([1, 2, 3])).toStrictEqual([
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 2, 1],
    [3, 1, 2],
  ]);
});
