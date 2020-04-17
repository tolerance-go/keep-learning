const combinationSum = require("../../src/算法/组合总和");

test(`combinationSum([2, 3, 6, 7], 7)`, () => {
  expect(combinationSum([2, 3, 6, 7], 7)).toStrictEqual([[2, 2, 3], [7]]);
});
