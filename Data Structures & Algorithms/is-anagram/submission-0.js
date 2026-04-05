class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let charObjS = {};
        let charObjT = {};
        let charS = s.split('');
        let charT = t.split('');
        charS.map((char) => {
            if (charObjS[char] == undefined) {
                charObjS[char] = 1;
            } else {
                charObjS[char]++;
            }
        })
        charT.map((char) => {
            if (charObjT[char] == undefined) {
                charObjT[char] = 1;
            } else {
                charObjT[char]++;
            }
        })

        if (Object.keys(charObjS).length !== Object.keys(charObjT).length) return false;
        
        for ( let key of Object.keys(charObjS)) {
            if (!charObjT.hasOwnProperty(key)) return false;
            if (charObjT[key] !== charObjS[key]) return false;
        }
        return true;
    }
}
