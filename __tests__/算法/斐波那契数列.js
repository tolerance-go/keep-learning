const fib = require('../../src/算法/动态规划/斐波那契数列');
const { getNodeList } = require('../../utils/utils');

test(`fib(4)`, () => {
  expect(fib(4)).toStrictEqual(3);
});
