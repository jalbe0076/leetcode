/*
  A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

  Given a string s, return true if it is a palindrome, or false otherwise.

  Example 1:
    Input: s = "A man, a plan, a canal: Panama"
    Output: true
    Explanation: "amanaplanacanalpanama" is a palindrome.

  Example 2:
    Input: s = "race a car"
    Output: false
    Explanation: "raceacar" is not a palindrome.

  Example 3:
    Input: s = " "
    Output: true
    Explanation: s is an empty string "" after removing non-alphanumeric characters.
    Since an empty string reads the same forward and backward, it is a palindrome.

  Constraints:
    1 <= s.length <= 2 * 105
    s consists only of printable ASCII characters.

  PSEUDOCODE:  
    data = string 
    clean the data to only include the alpahbet in lowercase
    
    iterate through the string and check all the charaters, if it's an alphabet save it into a variable
    check alphabet using unicode - google method and unicode numbers
    a = 97
    z = 122
    .charCodeAt()

    once it's clean reverse the clean code and check if it's strictly equal to the original clean code. 
*/

const isPalindrome = function(s) {
  const formatedString = s.toLowerCase()
  console.log()
  let newString = '';
  for (let i = 0; i < formatedString.length; i++) {
      if(formatedString.charCodeAt(i) >= 97 && formatedString.charCodeAt(i) <= 122 || formatedString.charCodeAt(i) >= 48 && formatedString.charCodeAt(i) <= 57) {
          newString += formatedString[i];
      }
  }
  const reverseString = Array.from(newString).reverse().join('').toString()
  return newString === reverseString;
};

/*
  Example 1:
    Input: s = "A man, a plan, a canal: Panama"
    Output: true
*/

console.log('Example 1: ', isPalindrome('A man, a plan, a canal: Panama'));

/*
  Example 2:
    Input: s = "race a car"
    Output: false
*/

console.log('Example 2: ', isPalindrome('race a car'));

/*
  Example 3:
    Input: s = " "
    Output: true
*/

console.log('Example 3: ', isPalindrome(' '));