import isSameTree from './index.code';
import { getTree } from 'utils/utils';

test('isSameTree([1, 2, 3], [1, 2, 3])', () => {
  expect(isSameTree(getTree([1, 2, 3]), getTree([1, 2, 3]))).toStrictEqual(
    true,
  );
});
