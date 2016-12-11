/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
const findRadius = (houses, heaters) => {
  let radius = 0;
  let heaterIdx = 0;

  const sortedHouses = [...houses].sort((a, b) => a - b);
  const sortedHeaters = [...heaters].sort((a, b) => a - b);

  for (let i = 0; i < sortedHouses.length; i += 1) {
    while (heaterIdx + 1 < sortedHeaters.length) {
      const nextAbs = Math.abs(sortedHeaters[heaterIdx + 1] - sortedHouses[i]);
      const presentAbs = Math.abs(sortedHeaters[heaterIdx] - sortedHouses[i]);
      if (nextAbs <= presentAbs) {
        heaterIdx += 1;
      } else {
        break;
      }
    }
    radius = Math.max(radius, Math.abs(sortedHeaters[heaterIdx] - sortedHouses[i]));
  }

  return radius;
};

export default findRadius;
