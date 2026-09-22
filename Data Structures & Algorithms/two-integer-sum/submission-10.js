class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hash = new Map()

        for(let i = 0; i < nums.length; i += 1) {
            hash.set(target-nums[i], i)
        }

        for(let j = 0; j < nums.length; j += 1) {
            if(hash.has(nums[j]) && hash.get(nums[j]) !== j) {
                return [hash.get(nums[j]), j]
            }
        }
    }
}
// target = nums[i] + nums[j]
// output [i, j]
// {target-nums[i]: i}