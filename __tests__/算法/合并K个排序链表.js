const mergeKLists = require('../../src/数据结构和算法/分治/合并K个排序链表');
const { getListNums: getNodeList } = require('../../utils/utils');

test(`mergeKLists([1, 2, 4], [1, 3, 4])`, () => {
  expect(
    mergeKLists([
      getNodeList([1, 4, 5]),
      getNodeList([1, 3, 4]),
      getNodeList([2, 6]),
    ]),
  ).toStrictEqual(getNodeList([1, 1, 2, 3, 4, 4, 5, 6]));
});
