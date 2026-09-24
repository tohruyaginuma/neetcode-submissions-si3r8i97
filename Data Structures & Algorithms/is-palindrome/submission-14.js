class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const regexp = /^[A-Za-z0-9]$/
        let l = 0        
        let r = s.length-1

        while(l < r) {
            while(l < r && !regexp.test(s[l])) {
                l += 1
            }
            while(l < r && !regexp.test(s[r])) {
                r -= 1
            }

            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false
            }

            l += 1
            r -= 1
        }
        
        return true
    }
}
