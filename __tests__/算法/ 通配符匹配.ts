import isMatch from 'src/算法/动态规划/通配符匹配';

test(`isMatch("", "*")`, () => {
  expect(isMatch('', '*')).toStrictEqual(true);
});
