import levelOrder from './index.code';
import { getTree } from 'utils/utils';

test('levelOrder([3, 9, 20, null, null, 15, 7])', () => {
  expect(levelOrder(getTree([3, 9, 20, null, null, 15, 7]))).toStrictEqual([
    [3],
    [9, 20],
    [15, 7],
  ]);
});
