const twoSum = require("../src/两数之和");

test("twoSum([2, 7, 11, 15], 9)", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
});
