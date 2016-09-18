/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
  let totalDigit = 0;
  let i = 0;

  function getDigitCount(i) {
    return 9 * Math.pow(10, i - 1) * i;
  }

  function getPrevDigitCount(i) {
    let count = 0;
    for (let j = 0; j < i; j++) {
      count += getDigitCount(j);
    }
    return count;
  }

  while (totalDigit < n) {
    i = i + 1;
    totalDigit = totalDigit + getDigitCount(i);
  }

  const remain = n - getPrevDigitCount(i);

  const set = Math.floor(remain / i);
  const mod = remain % i;
  if (mod === 0) {
    const str = `${Math.pow(10, i - 1) + set - 1}`;
    return +str.charAt(str.length - 1);
  }
  const str = `${Math.pow(10, i - 1) + set}`;
  
  return +str.charAt(mod - 1);
};

export default findNthDigit;
