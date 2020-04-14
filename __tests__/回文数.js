const isPalindrome = require("../回文数");

test(`isPalindrome('121')`, () => {
  expect(isPalindrome(121)).toBe(true);
});

test(`isPalindrome('-121')`, () => {
  expect(isPalindrome(-121)).toBe(false);
});
