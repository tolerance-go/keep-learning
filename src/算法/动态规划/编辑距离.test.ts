import minDistance from './编辑距离.code';

test(`minDistance('horse', 'ros')`, () => {
  expect(minDistance('horse', 'ros')).toStrictEqual(3);
});
