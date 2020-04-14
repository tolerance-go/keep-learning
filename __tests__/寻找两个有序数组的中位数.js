const findMedianSortedArrays = require("../寻找两个有序数组的中位数");

test(`findMedianSortedArrays([1,3], [2])`, () => {
  expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
});
