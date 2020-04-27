import partition from './index.code';
import { getListNums } from 'utils/utils';

test('partition([1, 2, 3, 4, 5], 2, 4)', () => {
  expect(partition(getListNums([1, 2, 3, 4, 5]), 2, 4)).toStrictEqual(
    getListNums([1, 4, 3, 2, 5]),
  );
});
