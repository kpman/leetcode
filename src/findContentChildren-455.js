// https://leetcode.com/problems/assign-cookies/
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
const findContentChildren = (g, s) => {
  const sortedG = g.sort((a, b) => a - b);
  const sortedS = s.sort((a, b) => a - b);
  let i = 0;
  let j = 0;
  let result = 0;
  while (i < g.length && j < s.length) {
    if (sortedG[i] <= sortedS[j]) {
      result += 1;
      j += 1;
      i += 1;
    } else {
      j += 1;
    }
  }
  return result;
};

export default findContentChildren;
