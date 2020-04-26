import partition from './分隔链表';
import { getNodeList } from 'utils/utils';

test('partition([1, 4, 3, 2, 5, 2]), 3)', () => {
  expect(partition(getNodeList([1, 4, 3, 2, 5, 2]), 3)).toStrictEqual(
    getNodeList([1, 2, 2, 4, 3, 5]),
  );
});
