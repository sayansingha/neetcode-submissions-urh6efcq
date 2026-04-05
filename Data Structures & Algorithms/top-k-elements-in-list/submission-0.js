class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let hashNums = {};
        nums.map((num) => {
            if (Object.keys(hashNums).includes(String(num))) {
                hashNums[num]++;
            } else {
                hashNums[num] = 1;
            }
        })
        
        return Object.entries(hashNums)
            .sort((a, b) => b[1] - a[1])
            .slice(0, k)
            .map(entry => Number(entry[0]));
    }
}
