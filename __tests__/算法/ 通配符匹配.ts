import isMatch from 'src/数据结构和算法/动态规划/通配符匹配';

test(`isMatch("", "*")`, () => {
  expect(isMatch('', '*')).toStrictEqual(true);
});
