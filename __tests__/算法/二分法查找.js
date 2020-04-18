const search = require("../../src/算法/二分法查找");

test(`search([1, 2, 4], [1, 3, 4])`, () => {
  expect(search([1, 2, 3, 4], 2)).toStrictEqual(1);
});
