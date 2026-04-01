/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root) {
        const dfs = (node, maxValue) => {
            if(!node) {
                return 0
            }

            let res = node.val >= maxValue ? 1 : 0
            let newMaxValue = Math.max(node.val, maxValue)

            res += dfs(node.left, newMaxValue)
            res += dfs(node.right, newMaxValue)
            
            return res
        }

        return dfs(root, root.val)
    }
}
