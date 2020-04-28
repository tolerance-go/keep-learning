import addBinary from '../../src/数据结构和算法/二进制求和';

test(`addBinary('11', '1')`, () => {
  expect(addBinary('11', '1')).toStrictEqual('100');
});
