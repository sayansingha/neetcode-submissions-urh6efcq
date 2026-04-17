class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s, k) {
    let left = 0;
    let longest = 0;
    let frequencyOfCharachters = {};
    let maximumFrequencyCharacterFrequency = 0; 
    for (let right = 0; right < s.length; right++) {
        frequencyOfCharachters[s[right]] = (frequencyOfCharachters[s[right]] | 0) + 1;
        maximumFrequencyCharacterFrequency = Math.max(...Object.values(frequencyOfCharachters));
        let totalLength = right - left + 1;
        while( totalLength - maximumFrequencyCharacterFrequency > k) {
            frequencyOfCharachters[s[left]]--;
            left++;
            totalLength = right - left + 1;
            maximumFrequencyCharacterFrequency = Math.max(...Object.values(frequencyOfCharachters));
        }
        longest = Math.max(longest, totalLength);
    }
    return longest;
  }
}
