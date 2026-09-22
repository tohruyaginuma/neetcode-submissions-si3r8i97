class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const setObj = new Set()

        for(const val of nums) {
            setObj.add(val)
        }

        return nums.length !== setObj.size
    }
}
