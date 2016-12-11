// https://leetcode.com/contest/8/problems/add-strings/
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = (num1, num2) => {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carrier = 0;
  let answer = '';
  while (i >= 0 || j >= 0 || carrier > 0) {
    const add = +(i >= 0 ? num1.charAt(i--) : 0) + +(j >= 0 ? num2.charAt(j--) : 0) + carrier; // eslint-disable-line no-plusplus
    answer = (add % 10) + answer;
    carrier = Math.floor(add / 10);
  }
  return answer;
};

export default addStrings;
