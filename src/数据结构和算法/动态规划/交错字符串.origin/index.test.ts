import isInterleave from './index.code';

test(`isInterleave('aabcc', 'dbbca', 'aadbbcbcac')`, () => {
  expect(isInterleave('aabcc', 'dbbca', 'aadbbcbcac')).toStrictEqual(true);
});
