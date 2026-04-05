class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numsSet = new Set(nums);
        let longest = 0;
        console.log(numsSet);
        for (let val of numsSet) {
            if (!numsSet.has(val - 1)) {
                let possibleLongest = this.longestPossible(numsSet, val)
                if ( possibleLongest > longest)
                    longest = possibleLongest;
            }
        }
        return longest;
    }

    longestPossible(numsSet, number) {
        let length = 0;
        while(numsSet.has(number)) {
            length ++;
            number++;
        }
        return length;
    }
}
