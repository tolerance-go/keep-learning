import zigzagLevelOrder from './index.code';
import { getTree } from 'utils/utils';

test('zigzagLevelOrder([3, 9, 20, null, null, 15, 7])', () => {
  expect(
    zigzagLevelOrder(getTree([3, 9, 20, null, null, 15, 7])),
  ).toStrictEqual([[3], [20, 9], [15, 7]]);
});
