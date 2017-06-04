// https://leetcode.com/problems/detect-capital/#/description
/**
 * @param {string} word
 * @return {boolean}
 */
// eslint-disable-next-line
const detectCapitalUse = word => {
  const lowerRegex = /^[a-z]+$/;
  const upperRegex = /^[A-Z]+$/;
  const firstUpperRegex = /^[A-Z][a-z]+$/;

  if (
    lowerRegex.test(word) ||
    upperRegex.test(word) ||
    firstUpperRegex.test(word)
  ) {
    return true;
  }

  return false;
};

export default detectCapitalUse;
