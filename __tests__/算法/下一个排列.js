const nextPermutation = require("../../src/数据结构和算法/下一个排列");

test(`nextPermutation(1241)`, () => {
  const nums = [1, 2, 4, 1];
  nextPermutation(nums);
  expect(nums).toStrictEqual([1, 4, 1, 2]);
});
