// https://leetcode.com/problems/reverse-vowels-of-a-string/
/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = s => {
  const vowelsIdx = [];
  const vowelsChar = [];
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  const sArr = s.split('');

  for (let i = 0; i < sArr.length; i++) {
    if (vowels.includes(sArr[i])) {
      vowelsIdx.push(i);
      vowelsChar.push(sArr[i]);
    }
  }

  if (vowelsIdx.length < 2) {
    return s;
  }

  vowelsChar.reverse();

  for (let i = 0; i < vowelsIdx.length; i++) {
    sArr[vowelsIdx[i]] = vowelsChar[i];
  }

  const result = sArr.join('');

  return result;
};

export default reverseVowels;
