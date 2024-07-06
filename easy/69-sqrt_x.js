/*
  Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

  You must not use any built-in exponent function or operator.

  For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
  
  Example 1:
    Input: x = 4
    Output: 2
    Explanation: The square root of 4 is 2, so we return 2.

  Example 2:
    Input: x = 8
    Output: 2
    Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

  Constraints:
    0 <= x <= 231 - 1
*/

const mySqrt = function(x) {
  let high = x % 2 ? (x + 1) / 2: x / 2;
  let low = x;

  while (low === x) {
      if (high * high === x) return high;
      if (high * high > x) {
          high = high % 2 ? (high + 1) / 2: high / 2;    
      }
      if (high * high < x) {
          low = high % 2 ? (high + 1) / 2: high / 2;    
          high = high * 2;
      }
  }

  for (let i = high; i >= low; i--) {
      if (i * i <= x && ((i + 1) * (i + 1)) > x) { 
          return i;
      }
  }
};

/*
Example 1:
    Input: x = 4
    Output: 2
*/

console.log('Example 1:', mySqrt(4));

/*
  Example 2:
    Input: x = 8
    Output: 2
*/

console.log('Example 1:', mySqrt(8));