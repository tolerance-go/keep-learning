import isNumber from 'src/算法/有限状态机/有效数字';

test(`isNumber("0")`, () => {
  expect(isNumber('0')).toStrictEqual(true);
});
