/*
  Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

  Example 1:
    Input: nums = [1,2,3,1], k = 3
    Output: true

  Example 2:
    Input: nums = [1,0,1,1], k = 1
    Output: true

  Example 3:
    Input: nums = [1,2,3,1,2,3], k = 2
    Output: false

  Constraints:
    1 <= nums.length <= 105
    -109 <= nums[i] <= 109
    0 <= k <= 105
*/

const containsNearbyDuplicate = function(nums, k) {
  const storage = {};

  for(let i = 0; i < nums.length; i++) {
    if(!storage[nums[i]] && storage[nums[i]] !== 0) {
      storage[nums[i]] = i;
    } else {
      const duplicateDifference = Math.abs(storage[nums[i]] - i);

      if(duplicateDifference <= k) return true;
      else storage[nums[i]] = i;
    }
  }

  return false;
};

/*
Example 1:
    Input: nums = [1,2,3,1], k = 3
    Output: true
*/

console.log('Example 1: ', containsNearbyDuplicate([1, 2, 3, 1], 3));

/*
  Example 2:
    Input: nums = [1,0,1,1], k = 1
    Output: true
*/

console.log('Example 2: ', containsNearbyDuplicate([1, 0, 1, 1], 1));

/*
  Example 3:
    Input: nums = [1,2,3,1,2,3], k = 2
    Output: false
*/

console.log('Example 3: ', containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));