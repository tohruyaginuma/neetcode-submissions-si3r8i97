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
        const q = []
        q.push(root)

        while(q.length) {
            let rightElm = null

            for(let i = q.length; i > 0; i -= 1) {
                const node = q.shift()
                
                if(node) {
                    rightElm = node
                    q.push(node.left)
                    q.push(node.right)
                }
            }

            if(rightElm) {
                res.push(rightElm.val)
            }
        }
        
        return res
    } 
}
