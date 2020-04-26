import deleteDuplicates from './删除排序链表中的重复元素2';
import { getNodeList } from 'utils/utils';

test('deleteDuplicates([1, 2, 3, 3, 4, 4, 5])', () => {
  expect(deleteDuplicates(getNodeList([1, 2, 3, 3, 4, 4, 5]))).toStrictEqual(
    getNodeList([1, 2, 5]),
  );
});
