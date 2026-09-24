class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        const correspondents = {
            "}":"{",
            ")":"(",
            "]":"["
        }

        for(let i = 0; i < s.length; i += 1) {
            console.log("---")
            console.log(stack)
            console.log(s[i])
            console.log(correspondents[s[i]])
            if(correspondents[s[i]]){
                const latest = stack.pop()
                if (correspondents[s[i]] !== latest) {
                    return false
                }
            } else {
                stack.push(s[i])
            }
        }

        return stack.length === 0 ? true : false
    }
}
