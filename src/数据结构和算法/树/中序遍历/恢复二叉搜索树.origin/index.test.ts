import recoverTree from './index.code';
import { getTree } from 'utils/utils';

test('recoverTree([1, 3, null, null, 2])', () => {
  const tree = getTree([1, 3, null, null, 2]);
  recoverTree(tree);
  expect(tree).toStrictEqual(getTree([3, 1, null, null, 2]));
});
