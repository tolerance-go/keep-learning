import removeDuplicates from './删除排序数组中的重复项2';

test(`removeDuplicates([1, 1, 1, 2, 2, 3])`, () => {
  const arr = [1, 1, 1, 2, 2, 3];
  const len = removeDuplicates(arr);
  expect(arr).toStrictEqual([1, 1, 2, 2, 3, 3]);
  expect(len).toStrictEqual(5);
});
