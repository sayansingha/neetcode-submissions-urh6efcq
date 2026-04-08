class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        let left = 0;
        let right = nums.length - 1;
        let result = [];

        while(left < right) {
            if(nums[left] + nums[right] === target) {
                result.push(left+1);
                result.push(right+1);
                break;
            } else if(nums[left] + nums[right] < target) {
                while(left < right && nums[left] == nums[left+1]){
                    left++;
                }
                left++;
            } else if(nums[left] + nums[right] > target) {
                while(left < right && nums[right] == nums[right-1]) {
                    right--;
                }
                right--;
            }
        }
        return result;
    }
}
