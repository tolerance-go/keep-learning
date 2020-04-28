import merge from './合并两个有序数组';

test(`merge([0], 0, [1], 1)`, () => {
  const num1 = [1, 2, 3, 0, 0, 0];
  merge(num1, 3, [2, 5, 6], 3);
  expect(num1).toStrictEqual([1, 2, 2, 3, 5, 6]);
});
