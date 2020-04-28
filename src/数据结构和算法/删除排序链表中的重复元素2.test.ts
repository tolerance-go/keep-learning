import deleteDuplicates from './删除排序链表中的重复元素2';
import { getListNums } from 'utils/utils';

test('deleteDuplicates([1, 2, 3, 3, 4, 4, 5])', () => {
  expect(deleteDuplicates(getListNums([1, 2, 3, 3, 4, 4, 5]))).toStrictEqual(
    getListNums([1, 2, 5]),
  );
});
