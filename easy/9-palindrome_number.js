/*
  Given an integer x, return true if x is a 
  palindrome, and false otherwise.

  Example 1:
    Input: x = 121
    Output: true
    Explanation: 121 reads as 121 from left to right and from right to left.

  Example 2:
    Input: x = -121
    Output: false
    Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

  Example 3:
    Input: x = 10
    Output: false
    Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

  Constraints:
    -231 <= x <= 231 - 1
*/

const isPalindrome = function(x) {
  let counter = 0;
  const xString = x.toString();
  const charNum = xString.length - 1;
  const middle = Math.ceil((charNum + 1) / 2);

  for(let i = charNum; i >= middle; i--) {
    if(xString[counter] === xString[i]) {
      counter++;
      continue;
    } else {
      return false;
    }
  }

  return true;
};

/*
  Example 1:
    Input: x = 121
    Output: true
*/

console.log('Example 1: ', isPalindrome(121));

/*  
  Example 2:
    Input: x = -121
    Output: false
*/

console.log('Example 2: ', isPalindrome(-121));

/*
  Example 3:
    Input: x = 10
    Output: false
*/

console.log('Example 3: ', isPalindrome(10));