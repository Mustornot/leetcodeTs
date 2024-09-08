/**
 * Ищем максимальную прибыль - минимальнаця цена в начале и максимальная цена в оставшехся числах
 * @param prices 
 * @returns 
 */
function maxProfit(prices: number[]): number {
	let maxProfit = 0;
	let minPrice = Number.MAX_VALUE;
  
	for (let i = 0; i < prices.length; i++) {
	  if (prices[i] < minPrice) {
		minPrice = prices[i];
	  } else if (prices[i] - minPrice > maxProfit) {
		maxProfit = prices[i] - minPrice;
	  }
	}

	return maxProfit;
};

const prices1 = [2,4,1]			//4-2 = 2
const prices2 = [7,6,4,3,1]		//0
const prices3 = [7,1,5,3,6,4]	//6-1 = 5

console.log(maxProfit(prices1));
console.log(maxProfit(prices2));
console.log(maxProfit(prices3));