import groupAnagrams from 'src/数据结构和算法/字母异位词分组';

test(`groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])`, () => {
  expect(
    groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']),
  ).toStrictEqual([['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]);
});
