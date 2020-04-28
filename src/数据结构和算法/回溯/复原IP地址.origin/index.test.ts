import restoreIpAddresses from './index.code';

test('restoreIpAddresses("25525511135")', () => {
  expect(restoreIpAddresses('25525511135')).toStrictEqual([
    '255.255.11.135',
    '255.255.111.35',
  ]);
});
