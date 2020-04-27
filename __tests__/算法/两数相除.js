const divide = require('../../src/算法/两数相除');
const { getListNums: getNodeList } = require('../../utils/utils');

test('divide(10, 3)', () => {
  expect(divide(10, 3)).toStrictEqual(3);
});
