import partition from './分隔链表';
import { getListNums } from 'utils/utils';

test('partition([1, 4, 3, 2, 5, 2]), 3)', () => {
  expect(partition(getListNums([1, 4, 3, 2, 5, 2]), 3)).toStrictEqual(
    getListNums([1, 2, 2, 4, 3, 5]),
  );
});
