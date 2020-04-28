const removeDuplicates = require('../../src/数据结构和算法/双指针/删除排序数组中的重复项');
const { getListNums: getNodeList } = require('../../utils/utils');

test('removeDuplicates([1,1,2])', () => {
  const arr = [1, 1, 2];
  const lefts = removeDuplicates(arr);
  expect(arr).toStrictEqual([1, 2, 2]);
  expect(lefts).toStrictEqual(2);
});
