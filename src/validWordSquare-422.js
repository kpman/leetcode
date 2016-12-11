// https://leetcode.com/contest/9/problems/valid-word-square/
/**
 * @param {string[]} words
 * @return {boolean}
 */
const validWordSquare = words => {
  if (words === ['']) {
    return false;
  }

  const arr = [];
  for (let i = 0, max = words.length; i < max; i += 1) {
    arr.push(words[i].split(''));
  }

  if (arr[0].length !== arr.length) {
    return false;
  }

  const maxLength = arr[0].length;
  for (let i = 0, max = arr.length; i < max; i += 1) {
    if (arr[i].length > maxLength) return false;
  }

  for (let i = 0; i < maxLength; i += 1) {
    for (let j = 0, max = arr[i].length; j < max; j += 1) {
      if (arr[i] && arr[i][j] && arr[i][j] !== arr[j][i]) {
        return false;
      }
    }
  }

  return true;
};

export default validWordSquare;
