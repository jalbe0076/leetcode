/*
  Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

  Example 1:
    Input: n = 2
    Output: [0,1,1]
    Explanation:
    0 --> 0
    1 --> 1
    2 --> 10
  
  Example 2:
    Input: n = 5
    Output: [0,1,1,2,1,2]
    Explanation:
    0 --> 0
    1 --> 1
    2 --> 10
    3 --> 11
    4 --> 100
    5 --> 101
  
  Constraints:
    0 <= n <= 105
  
  Follow up:
    It is very easy to come up with a solution with a runtime of O(n log n). Can you do it in linear time O(n) and possibly in a single pass?
    Can you do it without using any built-in function (i.e., like __builtin_popcount in C++)?

    PSEUDOCODE:
      iterate through the given input and push a representation of the binary sum into an array
        loop i <= n
        convert i into binary
        sum each number of binary and push that into an array

        convert into binary?  .toSting(2); data type string
        convert the string back to a number
        iterate through that number adding each one
*/

const countBits = function(n) {
  const output = [];

  for(let i = 0; i <= n; i++) {
      const binary = i.toString(2);
      const binaryArray = binary.split('');
      output[i] = binaryArray.reduce((acc, curr) => {
          acc += parseInt(curr);
          return acc;
      }, 0);
  }

  return output;
};

/*
   Example 1:
    Input: n = 2
    Output: [0,1,1]
*/

console.log('Example 1: ', countBits(2));

/*
  Example 2:
    Input: n = 5
    Output: [0,1,1,2,1,2]
*/

console.log('Example 2: ', countBits(5));