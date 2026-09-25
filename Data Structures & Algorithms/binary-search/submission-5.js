class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0
        let r = nums.length - 1
        let m = Math.floor((l + r) / 2)

        while(l <= r) {
            if(target === nums[m]) {
                return m
            } 
            
            if(target > nums[m]) {
                l = m + 1
                m = Math.floor((l + r) / 2)
            } else {
                r = m - 1
                m = Math.floor((l + r) / 2)
            }
        }

        return -1
    }
}
