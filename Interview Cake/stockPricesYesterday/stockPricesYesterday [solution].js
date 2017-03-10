let stockPricesYesterday = [10, 7, 5, 8, 11, 9];

getMaxProfit(stockPricesYesterday);
// returns 6 (buying for $5 and selling for $11)


function getMaxProfit (prices) {
  
  let mostProfit = -(Infinity);
  
  for (let i=0; i<prices.length-1; i++) {
    let profit = Math.max(...prices.slice(i+1)) - prices[i];
    if (profit > mostProfit) {
      mostProfit =  profit;
    }
  }
  
  return mostProfit;
}