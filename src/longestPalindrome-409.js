// https://leetcode.com/contest/7/problems/longest-palindrome/
/**
* @param {string} s
* @return {number}
*/
var longestPalindrome = function(s) {
  const repeatArr = {};
  let answer = 0;
  let maxOdd = 0;
  for (let i = 0 ; i < s.length; i++) {
    if (repeatArr[s.charAt(i)]) {
      repeatArr[s.charAt(i)] = repeatArr[s.charAt(i)] + 1;
    } else {
      repeatArr[s.charAt(i)] = 1;
    }
  }
  Object.keys(repeatArr).forEach(key => {
    if (repeatArr[key] % 2 === 0) {
      answer += repeatArr[key];
    } else if (repeatArr[key] < maxOdd) {
      answer += repeatArr[key] - 1;
    } else if (repeatArr[key] >= maxOdd) {
      if (maxOdd !== 0) answer += maxOdd - 1;
      maxOdd = repeatArr[key];
    }
  });
  return answer + maxOdd;
};

export default longestPalindrome;
