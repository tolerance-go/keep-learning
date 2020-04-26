import isScramble from './扰乱字符串';

test(`isScramble('great', 'rgeat')`, () => {
  expect(isScramble('great', 'rgeat')).toStrictEqual(true);
});
