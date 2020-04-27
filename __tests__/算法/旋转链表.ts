import rotateRight from 'src/算法/旋转链表';
import { getListNums } from 'utils/utils';

test(`rotateRight([1, 2, 3, 4, 5], 2)`, () => {
  expect(rotateRight(getListNums([1, 2, 3, 4, 5]), 2)).toStrictEqual(
    getListNums([4, 5, 1, 2, 3]),
  );
});
