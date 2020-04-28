import isValidBST from './index.code';

test(`isValidBST([2, 1, 3])`, () => {
  expect(isValidBST([2, 1, 3])).toStrictEqual(true);
});
