import minDistance from '../../src/算法/动态规划/编辑距离';

test(`minDistance('horse', 'ros')`, () => {
  expect(minDistance('horse', 'ros')).toStrictEqual(3);
});
