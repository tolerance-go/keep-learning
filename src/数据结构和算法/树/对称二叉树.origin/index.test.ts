import isSymmetric from './index.code';
import { getTree } from 'utils/utils';

test('isSymmetric([1, 2, 2, 3, 4, 4, 3])', () => {
  expect(isSymmetric(getTree([1, 2, 2, 3, 4, 4, 3]))).toStrictEqual(true);
});
