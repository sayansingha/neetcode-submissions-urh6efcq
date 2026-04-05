class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let output = "";
        strs.map(( str ) => {
            let length = str.length;
            output += String(length) + "#"+ str;
        })
        console.log(output)
        return output;
        
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let chars = str.split('');
        let output = [];
        while (chars.length > 0) {
            let hashIndex = chars.indexOf('#');
            let length = Number(chars.splice(0, hashIndex).join(''));
            console.log(length);
            chars.shift();
            console.log(chars);
            let word = chars.splice(0, length).join('');
            output.push(word);
        }
        return output;
    }
}
