import coinChange from '../../src/算法/动态规划/凑零钱';

test(`coinChange([1, 3, 5], 7)`, () => {
  expect(coinChange([1, 3, 5], 7)).toStrictEqual(3);
});
