// https://leetcode.com/contest/9/problems/reconstruct-original-digits-from-english/
/**
 * @param {string} s
 * @return {string}
 */
const originalDigits = s => {
  function mappingToChar(str, arr) {
    const result = arr;
    const sArr = str.split('');
    for (let i = 0, max = sArr.length; i < max; i += 1) {
      if (!result[sArr[i]]) {
        result[sArr[i]] = 0;
      }
      result[sArr[i]] += 1;
    }
    return result;
  }

  const result = mappingToChar(s, []);

  const order = {
    x: { str: 'six', value: 6 },
    z: { str: 'zero', value: 0 },
    w: { str: 'two', value: 2 },
    s: { str: 'seven', value: 7 },
    v: { str: 'five', value: 5 },
    f: { str: 'four', value: 4 },
    o: { str: 'one', value: 1 },
    r: { str: 'three', value: 3 },
    g: { str: 'eight', value: 8 },
    e: { str: 'nine', value: 9 },
  };

  const answer = [];

  Object.keys(order).forEach(key => {
    const count = result[key];
    if (count > 0) {
      for (let i = 0; i < count; i += 1) {
        answer.push(order[key].value);
      }

      const strArr = order[key].str.split('');
      for (let i = 0, max = strArr.length; i < max; i += 1) {
        result[strArr[i]] -= count;
      }
    }
  });

  return answer.sort().join('');
};

export default originalDigits;
