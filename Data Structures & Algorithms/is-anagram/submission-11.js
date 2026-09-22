class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) {
            return false
        }

        const hashS = new Map()
        const hashT = new Map()

        for(let i = 0; i < s.length; i += 1) {
            hashS.set(s[i], hashS.has(s[i]) ? hashS.get(s[i]) + 1 : 1)    
            hashT.set(t[i], hashT.has(t[i]) ? hashT.get(t[i]) + 1 : 1)    
        }

        console.log(hashS)
        console.log(hashT)

        for(const [key, val] of hashS) {
            if(!hashT.has(key)) {
                return false
            }

            if(hashS.get(key) !== hashT.get(key)) {
                return false        
            }
        }

        return true
    }
}
