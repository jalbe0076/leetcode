/*
  Given an integer n, return true if it is a power of two. Otherwise, return false.

  An integer n is a power of two, if there exists an integer x such that n == 2x.

  Example 1:
    Input: n = 1
    Output: true
    Explanation: 20 = 1

  Example 2:
    Input: n = 16
    Output: true
    Explanation: 24 = 16

  Example 3:
    Input: n = 3
    Output: false

  Constraints:
    -231 <= n <= 231 - 1
*/

const isPowerOfTwo = function(n) {
  if(n <= 0) return false; 

  let exponent = 0;
  let result = 1;
  
  while(result <= n) {
      result = 2 ** exponent;
      if (result === n) return true;
      exponent++;
  } 

  return false;
};

/*
Example 1:
    Input: n = 1
    Output: true
*/

console.log('Example 1: ', isPowerOfTwo(1));

/*
  Example 2:
    Input: n = 16
    Output: true
*/

console.log('Example 2: ', isPowerOfTwo(16));

/*
  Example 3:
    Input: n = 3
    Output: false
*/

console.log('Example 3: ', isPowerOfTwo(3));