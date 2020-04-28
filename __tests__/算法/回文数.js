const isPalindrome = require("../../src/数据结构和算法/回文数");

test(`isPalindrome('121')`, () => {
  expect(isPalindrome(121)).toStrictEqual(true);
});

test(`isPalindrome('-121')`, () => {
  expect(isPalindrome(-121)).toStrictEqual(false);
});
