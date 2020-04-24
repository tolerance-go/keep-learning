import lengthOfLongestSubstring from 'src/算法/滑动窗口/无重复字符最长子串';

test(`lengthOfLongestSubstring("aab")`, () => {
  expect(lengthOfLongestSubstring('aab')).toMatchSnapshot();
});
