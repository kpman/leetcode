// https://leetcode.com/contest/leetcode-weekly-contest-16b/problems/construct-the-rectangle/
/**
 * @param {number} area
 * @return {number[]}
 */
function getPrimeFactor(num) {
  const half = Math.floor(num / 2);
  const result = [1];
  let i;
  let j;

  // Determine out increment value for the loop and starting point.
  if (num % 2 === 0) {
    i = 2; j = 1;
  } else {
    i = 3; j = 2;
  }

  for (i; i <= half; i += j) {
    if (num % i === 0) { result.push(i); }
  }
  result.push(num);

  return result.sort((a, b) => (a - b));
}

const constructRectangle = area => { // eslint-disable-line
  if (area === 1) {
    return [1, 1];
  }
  const primeFactorArr = getPrimeFactor(area);
  const primeFactorCount = primeFactorArr.length;
  if (primeFactorCount % 2 === 0) {
    const lIndex = primeFactorCount / 2;
    const wIndex = (primeFactorCount / 2) - 1;
    return [
      primeFactorArr[lIndex],
      primeFactorArr[wIndex],
    ];
  }

  const lIndex = (primeFactorCount - 1) / 2;
  return [
    primeFactorArr[lIndex],
    primeFactorArr[lIndex],
  ];
};

export default constructRectangle;
