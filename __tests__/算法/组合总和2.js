const combinationSu2 = require("../../src/算法/组合总和2");

test(`combinationSu2([10, 1, 2, 7, 6, 1, 5], 8)`, () => {
  expect(combinationSu2([10, 1, 2, 7, 6, 1, 5], 8)).toStrictEqual([
    [1, 1, 6],
    [1, 2, 5],
    [1, 7],
    [2, 6],
  ]);
});
