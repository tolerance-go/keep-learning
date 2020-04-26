import deleteDuplicates from './删除排序链表中的重复元素';
import { getNodeList } from 'utils/utils';

test('deleteDuplicates([1, 1, 2])', () => {
  expect(deleteDuplicates(getNodeList([1, 1, 2]))).toStrictEqual(
    getNodeList([1, 2]),
  );
});
