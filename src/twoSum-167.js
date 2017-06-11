// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/#/description
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// eslint-disable-next-line
const twoSum = (numbers, target) => {
  const numbersLength = numbers.length;
  for (let i = 0; i < numbersLength; i += 1) {
    if (i > 0 && numbers[i] === numbers[i - 1]) {
      continue; // eslint-disable-line no-continue
    }
    for (let j = i + 1; j < numbersLength; j += 1) {
      if (numbers[i] + numbers[j] === target) {
        return [i + 1, j + 1]; // not zero-based
      }
      if (j > 0 && numbers[j] === numbers[j - 1]) {
        continue; // eslint-disable-line no-continue
      }
    }
  }
};

export default twoSum;
