import rotateRight from 'src/算法/旋转链表';
import { getNodeList } from 'utils/utils';

test(`rotateRight([1, 2, 3, 4, 5], 2)`, () => {
  expect(rotateRight(getNodeList([1, 2, 3, 4, 5]), 2)).toStrictEqual(
    getNodeList([4, 5, 1, 2, 3]),
  );
});
