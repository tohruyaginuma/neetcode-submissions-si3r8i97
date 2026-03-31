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
        const queue = new Queue()

        queue.push(root)

        while (!queue.isEmpty()) {
            const level = []
            
            for (let i = queue.size(); i > 0; i -= 1) {
                const node = queue.pop()

                if(node) {
                    level.push(node.val)
                    queue.push(node.left)
                    queue.push(node.right)
                }
                
            }

            if (level.length) {
                const right = level.pop()
                res.push(right)
            }
        }

        return res
    }
}
