/*
  Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

  You must write an algorithm with O(log n) runtime complexity.

  Example 1:
    Input: nums = [1,3,5,6], target = 5
    Output: 2

  Example 2:
    Input: nums = [1,3,5,6], target = 2
    Output: 1

  Example 3:
    Input: nums = [1,3,5,6], target = 7
    Output: 4

  Constraints:
    1 <= nums.length <= 104
    -104 <= nums[i] <= 104
    nums contains distinct values sorted in ascending order.
    -104 <= target <= 104
*/

const searchInsert = function(nums, target) {
  for(let i = 0; i < nums.length; i++) {
      if (nums[i] === target || nums[i] > target) {
          return i;
      } else if (i === nums.length - 1 && nums[i] !== target) {
          return i + 1;
      }
  }
};

/*
  Example 1:
    Input: nums = [1,3,5,6], target = 5
    Output: 2
*/

console.log('Example 1: ', searchInsert([1,3,5,6], 5));

/*
  Example 2:
    Input: nums = [1,3,5,6], target = 2
    Output: 1
*/

console.log('Example 2: ', searchInsert([1,3,5,6], 2));

/*
  Example 3:
    Input: nums = [1,3,5,6], target = 7
    Output: 4
*/

console.log('Example 1: ', searchInsert([1,3,5,6], 7));