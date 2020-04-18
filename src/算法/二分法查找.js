const search = (nums, target) => {
  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    const mid = (nums[l] + nums[r]) >> 1;
    if (nums[mid] === target) {
      return mid;
    } else if (target > nums[mid]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return -1;
};

module.exports = search;
