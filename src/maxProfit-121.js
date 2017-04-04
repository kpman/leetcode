// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/#/description
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = prices => {
  if (prices === null || prices.length < 2) return 0;

  let min = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i += 1) {
    min = Math.min(min, prices[i]);
    profit = Math.max(profit, prices[i] - min);
  }

  return profit;
};

export default maxProfit;
