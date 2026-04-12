class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let subString = [];
        let maxLength = 0;
        for (let i = 0; i < s.length; i++) {
            if (!subString.includes(s[i])) {
                console.log("char:",s[i]);
                subString.push(s[i]);
                console.log("subsStr:", subString);
            } else {
                while(subString.includes(s[i]) && subString.length > 0) {
                    subString.shift();
                }
                subString.push(s[i]);
            }
            console.log(subString.length);
            maxLength = Math.max(subString.length, maxLength);
        }
        return maxLength;
    }
}
