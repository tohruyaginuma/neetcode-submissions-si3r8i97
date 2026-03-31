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
     * @return {number[]}
     */
    rightSideView(root) {
        const res = []
        const q = new Array(root)

        while (q.length) {
            let rightNode = null

            for (let i = q.length; i > 0; i -= 1) {
                const node = q.shift()
                
                if(node) {
                    rightNode = node
                    q.push(node.left)
                    q.push(node.right)
                }
            }

            if(rightNode) {
                res.push(rightNode.val)
            }
        }

        return res
    }
}
