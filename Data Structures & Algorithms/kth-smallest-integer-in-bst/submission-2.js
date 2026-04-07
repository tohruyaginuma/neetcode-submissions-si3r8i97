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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        const order = []
        this.dfs(root, order)
        
        return order[k-1]
    }

    dfs(node, order) {
        if(!node) {
            return 
        }
        this.dfs(node.left, order)
        order.push(node.val)
        this.dfs(node.right, order)
    }
}
