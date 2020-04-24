import simplifyPath from 'src/算法/简化路径';

test('simplifyPath("/home/")', () => {
  expect(simplifyPath('/home/')).toStrictEqual('/home');
});
