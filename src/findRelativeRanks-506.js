// https://leetcode.com/contest/leetcode-weekly-contest-18b/problems/relative-ranks/
/**
 * @param {number[]} nums
 * @return {string[]}
 */
const findRelativeRanks = nums => { // eslint-disable-line
  const sortedNums = [...nums].sort((a, b) => b - a);
  return nums.map(num => {
    const idx = sortedNums.findIndex(e => e === num);
    if (idx === 0) return 'Gold Medal';
    if (idx === 1) return 'Silver Medal';
    if (idx === 2) return 'Bronze Medal';
    return `${idx + 1}`;
  });
};

export default findRelativeRanks;
