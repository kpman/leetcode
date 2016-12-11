// https://leetcode.com/contest/7/problems/valid-word-abbreviation/
/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
const validWordAbbreviation = (word, abbr) => {
  const abbrArr = abbr.split(/(\d+)/).filter(Boolean);
  const wordArr = word.split('');
  let j = 0;
  let i = 0;
  for (i; i < abbrArr.length; i++) {
    if (Number(abbrArr[i])) {
      if (/^0\d+/.test(abbrArr[i])) {
        return false;
      }
      j += Number(abbrArr[i]);
      if (j > wordArr.length) return false;
      continue; // eslint-disable-line no-continue
    }
    for (let k = 0; k < abbrArr[i].length; k++) {
      if (abbrArr[i][k] !== wordArr[j]) {
        return false;
      }
      j += 1;
    }
  }
  if (j < wordArr.length) return false;
  return true;
};

export default validWordAbbreviation;
