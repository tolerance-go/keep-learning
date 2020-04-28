import maxSubArray from 'src/数据结构和算法/最大子序和';

test(`maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])`, () => {
  expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toStrictEqual(6);
});
