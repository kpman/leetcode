/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  if (nums.length === 1) return 0;
  if (nums.length === 2) {
    if (nums[0] > nums[1]) return 0;
    return 1;
  }

  let peakIdx = 0;
  for (let i = 0; i < nums.length; i++) {

    // first array situation
    if (i === 0) {

      if (nums[i] > nums[i + 1]) {
        peakIdx = i;
      }
    }

    // last array situation
    if (i === nums.length - 1) {
      if (nums[i] > nums[i - 1]) peakIdx = i;
    }

    if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) peakIdx = i;
  }

  return peakIdx;
};

export default findPeakElement;
