class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let targetIndexes = [];
        // for (let i = 0; i < nums.length; i++) {
        //     for (let j = i + 1; j < nums.length; j++) {
        //         if ( nums[i] + nums[j] === target ) {
        //             targetIndexes[0] = i;
        //             targetIndexes[1] = j;
        //             break;
        //         }
        //     }
        //     if (targetIndexes.length == 2) {
        //         break;
        //     }
        // }
        // return targetIndexes;

        let map = new Map();
        for (let i = 0; i < nums.length; i++) {
            map.set(nums[i], i+1);
        }

        for (let i = 0; i < nums.length; i++) {
            let toSearch = target - nums[i];
            if(map.has(toSearch)) {
                let position = map.get(toSearch);
                if (position != i+1) {
                    targetIndexes.push(i, position - 1);
                    break;
                }
            }
        }
        return targetIndexes;
    }
}
