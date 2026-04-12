class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let leftBar = 0;
        let rightBar = heights.length - 1;
        let maxWater = 0;
        while(rightBar > leftBar) {
            let width = rightBar - leftBar;
            let height = Math.min(heights[leftBar], heights[rightBar]);
            maxWater = maxWater > (width * height) ? maxWater : (width * height);
            if(heights[leftBar] > heights[rightBar]) {
                rightBar--;
            } else {
                leftBar++;
            }
        }
        return maxWater;
    }
}
