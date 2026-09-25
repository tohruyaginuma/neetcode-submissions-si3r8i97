class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let res = 0
        let buy = Infinity
        let sell = 0

        let l = 0

        for(let r = 1; r < prices.length; r += 1) {
            if(prices[r] < prices[l]) {
                l = r
            } else {
                res = Math.max(res, prices[r] - prices[l])
            }
        }
        
        return res
    }
}
