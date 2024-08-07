/*
  Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

  Example 1:
    Input: nums = [1,2,3,1]
    Output: true

  Example 2:
    Input: nums = [1,2,3,4]
    Output: false

  Example 3:
    Input: nums = [1,1,1,3,3,4,3,2,4,2]
    Output: true
  
  Constraints:
    1 <= nums.length <= 105
    -109 <= nums[i] <= 109
*/

const containsDuplicate = (nums) => {
  const storage = {};
  
  for (const num of nums) {
    storage[num] = storage[num] + 1 || 1;
    if (storage[num] > 1) return true;
  }
  
  return false;
};

/*
  Example 1:
    Input: nums = [1,2,3,1]
    Output: true
*/

console.log('Example 1: ', containsDuplicate([1,2,3,1]));

/*
  Example 2:
    Input: nums = [1,2,3,4]
    Output: false
*/

console.log('Example 1: ', containsDuplicate([1,2,3,4]));

/*
  Example 3:
    Input: nums = [1,1,1,3,3,4,3,2,4,2]
    Output: true
*/

console.log('Example 1: ', containsDuplicate([1,1,1,3,3,4,3,2,4,2]));