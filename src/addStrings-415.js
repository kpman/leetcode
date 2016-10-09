// https://leetcode.com/contest/8/problems/add-strings/
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let answer = '';
  let moreThanTen = false;

  if (num1.length < num2.length) {
    const tmp = num1;
    num1 = num2;
    num2 = tmp;
  }

  const num1Length = num1.length;
  const num2Length = num2.length;

  function sumString(str1, str2) {
    const sum = (+str1) + (+str2);
    if (sum > 9) {
      return {
        digital: sum % 10,
        moreThanTen: true,
      }
    }
    return {
      digital: sum,
      moreThanTen: false,
    }
  }

  for (let i = 0; i < num1Length; i += 1) {
    if (i < num2Length) {
      let result = sumString(num1.charAt(num1Length - i - 1), num2.charAt(num2Length - i - 1));
      if (moreThanTen) {
        const sum = result.digital + 1;
        if (sum > 9) {
          result.moreThanTen = true;
        }
        answer = sum % 10 + answer;
      } else {
        answer = result.digital + answer;
      }
      moreThanTen = result.moreThanTen;
    } else {
      const str = num1.charAt(num1Length - i - 1);
      if (moreThanTen) {
        moreThanTen = false;
        const sum = +str + 1;
        if (sum > 9) {
          moreThanTen = true;
        }
        answer = sum % 10 + answer;

      } else {
        answer = str + answer;
      }
    }
  }

  if (num1Length === num2Length && moreThanTen || moreThanTen) {
    answer = '1' + answer;
  }

  return answer;
};

export default addStrings;
