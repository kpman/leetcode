/**
 * @param {number} n
 * @return {number}
 */
const findNthDigit = n => {
  let totalDigit = 0;
  let i = 0;

  function getDigitCount(d) {
    return 9 * Math.pow(10, d - 1) * d; // eslint-disable-line no-restricted-properties
  }

  function getPrevDigitCount(k) {
    let count = 0;
    for (let j = 0; j < k; j++) {
      count += getDigitCount(j);
    }
    return count;
  }

  while (totalDigit < n) {
    i += 1;
    totalDigit += getDigitCount(i);
  }

  const remain = n - getPrevDigitCount(i);

  const set = Math.floor(remain / i);
  const mod = remain % i;
  if (mod === 0) {
    const str = `${Math.pow(10, i - 1) + (set - 1)}`; // eslint-disable-line no-restricted-properties
    return +str.charAt(str.length - 1);
  }
  const str = `${Math.pow(10, i - 1) + set}`; // eslint-disable-line no-restricted-properties

  return +str.charAt(mod - 1);
};

export default findNthDigit;
