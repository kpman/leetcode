// https://leetcode.com/contest/5/problems/binary-watch/
/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
  const hoursObj = {};
  const minsObj = {};
  const totalObj = {};

  function getBinaryNum(n) {
    return (n >>> 0).toString(2).split('').filter(i => i === '1').length;
  }

  function getCombine(a, b) {
    const result = [];
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < b.length; j++) {
        const hour = a[i];
        let min = b[j];
        if (b[j] < 10) {
          min = `0${b[j]}`;
        }
        const str = `${hour}:${min}`;
        result.push(str);
      }
    }
    return result;
  }

  for (let i = 0; i < 12; i++) {
    if (hoursObj[getBinaryNum(i)] === undefined) {
      hoursObj[getBinaryNum(i)] = [];
    }
    hoursObj[getBinaryNum(i)].push(i);
  }

  for (let i = 0; i < 60; i++) {
    if (minsObj[getBinaryNum(i)] === undefined) {
      minsObj[getBinaryNum(i)] = [];
    }
    minsObj[getBinaryNum(i)].push(i);
  }

  if (num === 0) return ['0:00'];

  for (let i = 0; i < Object.keys(hoursObj).length; i++) {
    for (let j = 0; j < Object.keys(minsObj).length; j++) {
      const indexSum = i + j;
      if (totalObj[indexSum] === undefined) {
        totalObj[indexSum] = [];
      }
      totalObj[indexSum] = totalObj[indexSum].concat(
        getCombine(hoursObj[Object.keys(hoursObj)[i]], minsObj[Object.keys(minsObj)[j]])
      );
    }
  }
  return totalObj[num] || [];
};

export default readBinaryWatch;
