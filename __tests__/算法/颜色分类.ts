import sortColors from 'src/算法/颜色分类';

test(`sortColors([2, 0, 2, 1, 1, 0])`, () => {
  expect(sortColors([2, 0, 2, 1, 1, 0])).toStrictEqual([0, 0, 1, 1, 2, 2]);
});
