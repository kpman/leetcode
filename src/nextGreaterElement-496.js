// https://leetcode.com/contest/leetcode-weekly-contest-18b/problems/next-greater-element-i/
/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
const nextGreaterElement = (findNums, nums) => { // eslint-disable-line
  const result = findNums.map(findNum => {
    let index = nums.findIndex(e => e === findNum);
    while (index < nums.length - 1) {
      index += 1;
      if (nums[index] > findNum) {
        return nums[index];
      }
    }
    return -1;
  });
  return result;
};

export default nextGreaterElement;
