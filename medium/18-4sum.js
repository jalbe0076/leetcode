/*
  Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

  0 <= a, b, c, d < n
  a, b, c, and d are distinct.
  nums[a] + nums[b] + nums[c] + nums[d] == target
  You may return the answer in any order.

  Example 1:
    Input: nums = [1,0,-1,0,-2,2], target = 0
    Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

  Example 2:
    Input: nums = [2,2,2,2,2], target = 8
    Output: [[2,2,2,2]]

  Constraints:
    1 <= nums.length <= 200
    -109 <= nums[i] <= 109
    -109 <= target <= 109
*/

const fourSum = function(nums, target) {
  const sortedNum = nums.sort((a, b) => a - b);
  const result = [];

  for(let numA = 0; numA < nums.length - 3; numA++) {
      if(numA > 0 && nums[numA] === nums[numA - 1]) continue;

      for(let numB = numA + 1; numB < nums.length - 2; numB++) {
          if(numB - numA > 1 && nums[numB] === nums[numB - 1]) continue;
          let numC = numB + 1;
          let numD = nums.length - 1;

          while(numC < numD) {
              let sum = sortedNum[numA] + sortedNum[numB] + sortedNum[numC] + sortedNum[numD];

              if(sum < target) {
                  numC++;
              } else if(sum > target) {
                  numD--;
              } else {
                  result.push([sortedNum[numA], sortedNum[numB], sortedNum[numC], sortedNum[numD]])
                  while(nums[numC] === nums[numC + 1]) numC++;
                  while(nums[numD] === nums[numD - 1]) numD--;
                  numC++;
                  numD--;
              }
          }
      }  
  }

  return result;    
};

/*
  Example 1:
    Input: nums = [1,0,-1,0,-2,2], target = 0
    Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
*/

console.log('Example 1: ', fourSum([1,0,-1,0,-2,2], 0));

/*
  Example 2:
    Input: nums = [2,2,2,2,2], target = 8
    Output: [[2,2,2,2]]
*/

console.log('Example 2: ', fourSum([2,2,2,2,2], 8));