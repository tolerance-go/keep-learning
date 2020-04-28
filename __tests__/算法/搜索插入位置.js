const searchInsert = require("../../src/数据结构和算法/搜索插入位置");

test(`searchInsert([1, 3, 5, 6], 5)`, () => {
  expect(searchInsert([1, 3, 5, 6], 5)).toStrictEqual(2);
});
