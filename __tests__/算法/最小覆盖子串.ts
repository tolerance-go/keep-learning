import minWindow from 'src/算法/滑动窗口/最小覆盖子串';

test(`minWindow('ADOBECODEBANC', 'ABC')`, () => {
  expect(minWindow('ADOBECODEBANC', 'ABC')).toStrictEqual('BANC');
});
