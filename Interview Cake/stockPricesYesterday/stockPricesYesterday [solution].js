let stockPricesYesterday = [10, 7, 5, 8, 11, 9];

getMaxProfit(stockPricesYesterday);
// returns 6 (buying for $5 and selling for $11)


function getMaxProfit (prices) {
  
  let mostProfit = -(Infinity);
  let minPrice = prices[0];

  for (let i=0; i<prices.length-1; i++) {
    mostProfit = Math.max(prices[i]-minPrice, mostProfit);
    minPrice = Math.min(prices[i], minPrice);
  }
  
  return mostProfit;
}