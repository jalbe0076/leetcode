/*
  Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

  Example 1:
    Input: nums = [1,2,3]
    Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

  Example 2:
    Input: nums = [0,1]
    Output: [[0,1],[1,0]]

  Example 3:
    Input: nums = [1]
    Output: [[1]]

  Constraints:
    1 <= nums.length <= 6
    -10 <= nums[i] <= 10
    All the integers of nums are unique.
*/

const permute = function(nums) {
  if(nums.length === 1) return [nums.slice()];

  const result = [];

  for(let i = 0; i < nums.length; i++) {
      const swappedNum = nums.shift();
      const perms = permute(nums.slice());

      for(let num of perms) {
          console.log(perms, swappedNum)
          num.push(swappedNum);
      }
      console.log('after second loop', perms)
      console.log('result', result) 
      result.push(...perms);
      console.log('result2', result, nums) 
      nums.push(swappedNum)
  };

  return result
};

/*
Example 1:
    Input: nums = [1,2,3]
    Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
*/

console.log('Example 1: ', permute([1,2,3]));

/*
  Example 2:
    Input: nums = [0,1]
    Output: [[0,1],[1,0]]
*/

console.log('Example 2: ', permute([0,1]));

/*
  Example 3:
    Input: nums = [1]
    Output: [[1]]
*/

console.log('Example 3: ', permute([1]));