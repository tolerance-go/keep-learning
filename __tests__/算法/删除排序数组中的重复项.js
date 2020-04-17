const removeDuplicates = require("../../src/算法/双指针/删除排序数组中的重复项");
const { getNodeList } = require("../../src/utils");

test("removeDuplicates([1,1,2])", () => {
  const arr = [1, 1, 2];
  const lefts = removeDuplicates(arr);
  expect(arr).toStrictEqual([1, 2, 2]);
  expect(lefts).toStrictEqual(2);
});
