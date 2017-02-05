// leetcode url here
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const nextGreaterElements = nums => { // eslint-disable-line
  return nums.map((num, idx) => {
    let newIndex = idx + 1;
    while (idx !== newIndex % nums.length) {
      const modIndex = newIndex % nums.length;
      if (nums[modIndex] > nums[idx]) return nums[modIndex];
      newIndex += 1;
    }
    return -1;
  });
};

export default nextGreaterElements;
