/*
  Write an algorithm to determine if a number n is happy.

  A happy number is a number defined by the following process:

  Starting with any positive integer, replace the number by the sum of the squares of its digits.
  Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
  Those numbers for which this process ends in 1 are happy.
  Return true if n is a happy number, and false if not.

  Example 1:
    Input: n = 19
    Output: true
    Explanation:
    12 + 92 = 82
    82 + 22 = 68
    62 + 82 = 100
    12 + 02 + 02 = 1

  Example 2:
    Input: n = 2
    Output: false
    

  Constraints:
    1 <= n <= 231 - 1

  Pseudocode
    Step 1: split number into it's respective digits
    Step 2: then square and sum each of those numbers (^2)???

    if the sum = 1 return true 
    if not continue with the new sum repeat step 1 & 2

    Return false if the number never equal 1
    Will need to loop - possibly a good problem for recursion
    Will need a storage memo to keep track of numbers so that if an answer already exists then it equates to false 
*/

const isHappy = function(n, memo = {}) {
  if (n !== 1){
    if (memo[n]) return false
    memo[n] = 1;
    const splitStrings = n.toString().split('');
    const splitNums = splitStrings.map(Number);
    const exponent = splitNums.reduce((acc, num) => {
      return acc += num ** 2
    }, 0);
    return isHappy(exponent, memo);
  }

  return true;
};

/*
  Testcase 1:
    Input: n = 19
    Output: true
*/

console.log('Example 1: ', isHappy(19));

/*
  Testcase 2:
    Input: n = 2
    Output: false
*/

console.log('Example 2: ', isHappy(2));