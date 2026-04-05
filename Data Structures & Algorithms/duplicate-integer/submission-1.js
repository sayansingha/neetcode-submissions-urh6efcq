class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let obj = {}
        nums.map((num) => {
            if (!Object.keys(obj).includes(String(num))) {
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
