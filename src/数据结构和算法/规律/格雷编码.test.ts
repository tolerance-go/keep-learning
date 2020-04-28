import grayCode from './格雷编码';

test(`grayCode(2)`, () => {
  expect(grayCode(2)).toStrictEqual([0, 1, 3, 2]);
});
