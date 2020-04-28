const addTwoNumbers = require('../../src/数据结构和算法/两数相加');
const { getListNums: getNodeList } = require('../../utils/utils');

test('addTwoNumbers', () => {
  expect(
    addTwoNumbers(getNodeList([2, 4, 3]), getNodeList([5, 6, 4])),
  ).toMatchSnapshot();
});
