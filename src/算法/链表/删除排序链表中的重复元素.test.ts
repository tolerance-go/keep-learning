import deleteDuplicates from './删除排序链表中的重复元素';
import { getListNums } from 'utils/utils';

test('deleteDuplicates([1, 1, 2])', () => {
  expect(deleteDuplicates(getListNums([1, 1, 2]))).toStrictEqual(
    getListNums([1, 2]),
  );
});
