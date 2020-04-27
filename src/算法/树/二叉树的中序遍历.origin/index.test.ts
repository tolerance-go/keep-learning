import inorderTraversal from './index.code';
import { getTree } from 'utils/utils';

test(`inorderTraversal([1, null, 2, 3])`, () => {
  const tree = getTree([1, null, 2, 3]);
  const items = inorderTraversal(tree);
  expect(items.map((item) => item.val)).toStrictEqual([1, 3, 2]);
});
