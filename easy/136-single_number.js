/*
  Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

  You must implement a solution with a linear runtime complexity and use only constant extra space.

  Example 1:
    Input: nums = [2,2,1]
    Output: 1

  Example 2:
    Input: nums = [4,1,2,1,2]
    Output: 4

  Example 3:
    Input: nums = [1]
    Output: 1

  Constraints:
    1 <= nums.length <= 3 * 104
    -3 * 104 <= nums[i] <= 3 * 104
    Each element in the array appears twice except for one element which appears only once.
*/

// Refactored to solve with a linear runtime complexity and use only constant extra space
const singleNumber = function(nums) {
  let uniqueNum = 0;

  for (num of nums) {
    uniqueNum ^= num;
  }

  return uniqueNum;
}

// const singleNumber = function(nums) {
//   const uniqueNum = new Set();

//   for (num of nums) {
//       if (uniqueNum.has(num)) {
//           uniqueNum.delete(num);
//       } else {
//           uniqueNum.add(num);
//       }
//   }

//   return uniqueNum.values().next().value;
// };

/*
  Example 1:
    Input: nums = [2,2,1]
    Output: 1
*/

console.log('Eample 1: ', singleNumber([2,2,1]));

/*
  Example 2:
    Input: nums = [4,1,2,1,2]
    Output: 4
*/

console.log('Eample 2: ', singleNumber([4,1,2,1,2]));

/*
  Example 3:
    Input: nums = [1]
    Output: 1
*/

console.log('Eample 3: ', singleNumber([1]));