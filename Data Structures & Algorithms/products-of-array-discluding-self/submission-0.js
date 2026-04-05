class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let leftProd = [];
        let rightProd = [];
        leftProd.push(1);
        rightProd.push(1);
        for (let i = 0; i < nums.length-1; i++) {
            leftProd.push(nums[i] * leftProd[i]);
        }
        for (let i = nums.length - 1; i > 0; i--) {
            rightProd.unshift(nums[i] * rightProd[0]);
        }
        let output = [];
        for( let i = 0; i < nums.length; i++) {
            output.push(leftProd[i] * rightProd[i]);
        }
        return output;
    }
}
