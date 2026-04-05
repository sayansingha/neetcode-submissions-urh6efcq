class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let obj = {}
        nums.map((num) => {
            if (obj[num] == undefined) {
                obj[num] = 1;
            } else {
                obj[num]++;
            }
        })
        for (let key in obj){
            if (obj[key] > 1)
                return true;
        }
        return false;
    }
}
