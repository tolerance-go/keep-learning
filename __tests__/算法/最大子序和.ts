import maxSubArray from 'src/算法/最大子序和';

test(`maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])`, () => {
  expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toStrictEqual(6);
});
