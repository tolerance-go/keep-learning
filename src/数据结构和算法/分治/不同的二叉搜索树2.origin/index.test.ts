import generateTrees from './index.code';
import { getTree, getTreeNums } from 'utils/utils';

test(`generateTrees(3)`, () => {
  expect(generateTrees(3)).toStrictEqual(
    [
      [1, null, 2, null, 3],
      [1, null, 3, 2],
      [2, 1, 3],
      [3, 1, null, null, 2],
      [3, 2, null, 1],
    ].map((item) => getTree(item)),
  );
});
