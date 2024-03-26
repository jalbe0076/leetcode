/*
  The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

  - countAndSay(1) = "1"
  - countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
  To determine how you "say" a digit string, split it into the minimal number of substrings such that each substring contains exactly one unique digit. Then for each substring, say the number of digits, then say the digit. Finally, concatenate every said digit.

  For example, the saying and conversion for digit string "3322251":
    "3322251"
    two 3's, three 2's, one 5, and one 1
    2 3 + 3 2 + 1 5 + 1 1 
    "23321511"
  Given a positive integer n, return the nth term of the count-and-say sequence.

  Example 1:
    Input: n = 1
    Output: "1"
    Explanation: This is the base case.
  
  Example 2:
    Input: n = 4
    Output: "1211"
    Explanation:
    countAndSay(1) = "1"
    countAndSay(2) = say "1" = one 1 = "11"
    countAndSay(3) = say "11" = two 1's = "21"
    countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"
  
  Constraints
    1 <= n <= 30

    PSEUDOCODE: 
      if n = 1 return 1 - base case
      variable to save the numbers array start with 1
      loop n times - recursion (n - 1)
      loop to iterate on the number array
      counter which increases each time the next number = the current number
          when it does not it pushes the count and current number and count resets
*/

countAndSay = function(n) {
  if(n === 1) return '1';

  const countSay = (str) => {
      let result = '';
      let counter = 1;

      for(let i = 0; i < str.length; i++) {
          if(str[i] === str[i + 1]) {
              counter++;
          } else {
              result += counter + str[i];
              counter = 1;
          }
      }

      return result;
  }

  return countSay(countAndSay(n - 1));
};

/*
  Example 1:
    Input: n = 1
    Output: "1"
*/

console.log('Example 1: ', countAndSay(1));

/*
  Example 2:
    Input: n = 4
    Output: "1211"
*/

console.log('Example 2: ', countAndSay(4));