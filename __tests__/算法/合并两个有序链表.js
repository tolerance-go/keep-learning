const mergeTwoLists = require('../../src/数据结构和算法/递归/合并两个有序链表');
const { getListNums: getNodeList } = require('../../utils/utils');

test(`mergeTwoLists([1, 2, 4], [1, 3, 4])`, () => {
  expect(
    mergeTwoLists(getNodeList([1, 2, 4]), getNodeList([1, 3, 4])),
  ).toStrictEqual(getNodeList([1, 1, 2, 3, 4, 4]));
});
