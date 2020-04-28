const findMedianSortedArrays = require("../../src/数据结构和算法/寻找两个有序数组的中位数");

test(`findMedianSortedArrays([1,3], [2])`, () => {
  expect(findMedianSortedArrays([1, 3], [2])).toStrictEqual(2);
});
