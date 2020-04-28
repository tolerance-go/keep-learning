import lengthOfLongestSubstring from 'src/数据结构和算法/滑动窗口/无重复字符最长子串';

test(`lengthOfLongestSubstring("aab")`, () => {
  expect(lengthOfLongestSubstring('aab')).toMatchSnapshot();
});
