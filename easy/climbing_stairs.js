/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:
  Input: n = 2
  Output: 2
  Explanation: There are two ways to climb to the top.
  1. 1 step + 1 step
  2. 2 steps

Example 2:
  Input: n = 3
  Output: 3
  Explanation: There are three ways to climb to the top.
  1. 1 step + 1 step + 1 step
  2. 1 step + 2 steps
  3. 2 steps + 1 step
 
Constraints:
  1 <= n <= 45

PSEUDOCODE:
  data = number
  Given a number of steps how many different ways can you reach the top, can only skip max 2 steps
  
  n = 4
  output = 5
  1 + 1 + 1 + 1
  1 + 1 + 2
  2 + 1 +1
  1 + 2 + 1
  2 + 2

  n = 5
  output = 8
  1 + 1 + 1 + 1 + 1
  2 + 1 + 1 + 1 
  1 + 2 + 1 + 1
  1 + 1 + 2 + 1
  1 + 1 + 1 + 2
  2 + 2 + 1
  2 + 1 + 2
  1 + 2 + 2

  pattern = the number of ways is the sum of the last 2 steps other than for 1 or 2 steps
  for example, 4 steps have 5 different ways to reach the top because 2 steps have 2 unique ways and 3 steps have 3 unique ways. So 2 + 3 = 5

  create an object to store the number of ways the you can reach the top
  indicate the solution for 1 and 2 steps
  iterate starting at 3 until n = input and store teh values in the object
  return the value of the object with the key equal to the input
*/

const climbStairs = function(n) {
  const climb = {};

  if (n === 1) return 1;
  climb['1'] = 1;
  climb['2'] = 2;

  for (let i = 3; i <= n; i++) {
      climb[i] = climb[i - 1] + climb[i - 2]
  }
  
  return climb[n];
};

/*
Example 1:
  Input: n = 2
  Output: 2
*/

console.log('Example 1: ', climbStairs(2));

/*
Example 2:
  Input: n = 3
  Output: 3
*/

console.log('Example 2: ', climbStairs(3));
