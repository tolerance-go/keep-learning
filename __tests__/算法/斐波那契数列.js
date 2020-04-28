const fib = require('../../src/数据结构和算法/动态规划/斐波那契数列');
const { getListNums: getNodeList } = require('../../utils/utils');

test(`fib(4)`, () => {
  expect(fib(4)).toStrictEqual(3);
});
