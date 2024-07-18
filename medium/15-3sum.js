/*
  Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

  Notice that the solution set must not contain duplicate triplets.

  Example 1:
    Input: nums = [-1,0,1,2,-1,-4]
    Output: [[-1,-1,2],[-1,0,1]]
    Explanation: 
    nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
    nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
    nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
    The distinct triplets are [-1,0,1] and [-1,-1,2].
    Notice that the order of the output and the order of the triplets does not matter.

  Example 2:
    Input: nums = [0,1,1]
    Output: []
    Explanation: The only possible triplet does not sum up to 0.

  Example 3:
    Input: nums = [0,0,0]
    Output: [[0,0,0]]
    Explanation: The only possible triplet sums up to 0.

  Constraints:
    3 <= nums.length <= 3000
    -105 <= nums[i] <= 105
*/

const threeSum = function(nums) {
  nums = nums.sort((a, b) => a - b);
  const results = [];
  if(nums.length < 3) return results;

  for(let i = 0; i < nums.length - 2; i++) {
      if (nums[i] > 0) break
      if (i > 0 && nums[i] === nums[i - 1]) continue
      let midNum = i + 1;
      let lastNum = nums.length - 1;

      while(midNum < lastNum) {
          const sum = nums[i] + nums[midNum] + nums[lastNum];

          if(sum < 0) {
              midNum++;
          } else if(sum > 0) {
              lastNum--;
          } else {
              results.push([nums[i], nums[midNum], nums[lastNum]])
              while(nums[lastNum] === nums[lastNum - 1]) lastNum--;
              while(nums[midNum] === nums[midNum + 1]) midNum++;
              lastNum--;
              midNum++;
          }
      }
  }

  return results;
};

/*
  Example 1:
    Input: nums = [-1,0,1,2,-1,-4]
    Output: [[-1,-1,2],[-1,0,1]]
*/

console.log('Example 1: ', threeSum([-1,0,1,2,-1,-4]));

/*
  Example 2:
    Input: nums = [0,1,1]
    Output: []
*/

console.log('Example 2: ', threeSum([0,1,1]));

/*
  Example 3:
    Input: nums = [0,0,0]
    Output: [[0,0,0]]
*/

console.log('Example 3: ', threeSum([0,0,0]));