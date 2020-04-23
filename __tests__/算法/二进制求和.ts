import addBinary from '../../src/算法/二进制求和';

test(`addBinary('11', '1')`, () => {
  expect(addBinary('11', '1')).toStrictEqual('100');
});
