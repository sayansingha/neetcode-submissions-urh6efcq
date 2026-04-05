class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let targetIndexes = [];
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if ( nums[i] + nums[j] === target ) {
                    targetIndexes[0] = i;
                    targetIndexes[1] = j;
                    break;
                }
            }
            if (targetIndexes.length == 2) {
                break;
            }
        }
        return targetIndexes;
    }
}
