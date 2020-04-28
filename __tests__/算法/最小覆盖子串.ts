import minWindow from 'src/数据结构和算法/滑动窗口/最小覆盖子串';

test(`minWindow('ADOBECODEBANC', 'ABC')`, () => {
  expect(minWindow('ADOBECODEBANC', 'ABC')).toStrictEqual('BANC');
});
