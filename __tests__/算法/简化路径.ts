import simplifyPath from 'src/数据结构和算法/简化路径';

test('simplifyPath("/home/")', () => {
  expect(simplifyPath('/home/')).toStrictEqual('/home');
});
