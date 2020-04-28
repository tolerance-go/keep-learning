import coinChange from '../../src/数据结构和算法/动态规划/凑零钱';

test(`coinChange([1, 3, 5], 7)`, () => {
  expect(coinChange([1, 3, 5], 7)).toStrictEqual(3);
});
