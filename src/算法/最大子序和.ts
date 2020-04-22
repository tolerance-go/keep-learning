/**
给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

示例:

输入: [-2,1,-3,4,-1,2,1,-5,4],
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
进阶:

如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/maximum-subarray
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 可能存在负数，所以可能加上数字之后反而最大总和减少了
 * 注意 curSum 是拿 nums[i] 和 curSum + nums[i] 进行取最大操作，因为可以直接从 i 开始
 * curSum 初始值为 nums[i]，因为存在负数，不能为 0，nums 为空的时候需要额外判断
 *
 *
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  if (nums == null || nums.length === 0) return 0;
  let curSum = nums[0],
    maxSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    curSum = Math.max(nums[i], curSum + nums[i]);
    maxSum = Math.max(curSum, maxSum);
  }
  return maxSum;
};

export default maxSubArray;
