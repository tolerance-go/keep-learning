const search = require("../../src/数据结构和算法/搜索旋转排序数组");

test(`search([4, 5, 6, 7, 0, 1, 2], 0)`, () => {
  expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toStrictEqual(4);
});
