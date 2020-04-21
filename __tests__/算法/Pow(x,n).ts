import myPow from 'src/算法/Pow(x,n)';

test(`myPow(2.0, 10)`, () => {
  expect(myPow(2.0, 10)).toStrictEqual(1024.0);
});
