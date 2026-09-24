class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const lowerS = s.toLowerCase()
        const regexp = /^[A-Za-z0-9]+$/
        
        let r = s.length-1
        for (let l = 0; l < lowerS.length; l += 1) {
            if(!regexp.test(lowerS[l])) {
                continue
            }

            while(!regexp.test(lowerS[r])) {
                r -= 1
            }

            if(lowerS[l] !== lowerS[r]) {
                return false
            }

            r -= 1
        }

        return true
    }
}
