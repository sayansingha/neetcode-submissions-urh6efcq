class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let output = [];
        let input = strs;
        while(input.length > 0) {
            let str = input[0];
            let arr = [];
            let indexes = [];
            arr.push(str);
            for (let j = 1; j < input.length; j++) {
                if (this.sameElements(str, strs[j])) {
                    console.log('here')
                    arr.push(strs[j]);
                    indexes.push(j);
                }
            }
            output.push(arr);
            indexes.sort((a, b) => b - a);
            indexes.map((index) => {
                input.splice(index, 1);
            })
            input.splice(0, 1);
        }
        return output;
    }

    sameElements(a, b) {
        if (a.length !== b.length) return false;
        let objA = {};
        let objB = {};

        const setA = new Set(a);

        for (let char of b) {
            if (!setA.has(char)) return false;
        }
        //check number of occurences:
        a.split('').map((char) => {
            if(!Object.keys(objA).includes(char)) {
                objA[char] = 1;
            } else {
                objA[char]++;
            }
        })
        b.split('').map((char) => {
            if(!Object.keys(objB).includes(char)) {
                objB[char] = 1;
            } else {
                objB[char]++;
            }
        })

        for (const key in objA) {
            if(objA[key] !== objB[key]) {
                return false;
            }
        }

        return true;
    }
}
