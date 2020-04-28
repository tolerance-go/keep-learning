const removeNthFromEnd = require('../../src/数据结构和算法/删除链表的倒数第N个节点');
const { getListNums: getNodeList } = require('../../utils/utils');

test('removeNthFromEnd([1,2,3,4,5], 2])', () => {
  expect(removeNthFromEnd(getNodeList([1, 2, 3, 4, 5]), 2)).toStrictEqual(
    getNodeList([1, 2, 3, 5]),
  );
});
