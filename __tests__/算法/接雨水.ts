import trap from 'src/数据结构和算法/动态规划/接雨水';

test('trap([0,1,0,2,1,0,1,3,2,1,2,1])', () => {
  expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toStrictEqual(6);
});
