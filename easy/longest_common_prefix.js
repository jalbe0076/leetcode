/**
 * Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
 */

const  longestCommonPrefix = function(strs) {
  let intPosition = 0;
  let checkChar = '';
  let prefix = '';

  for(let i = 0; i < strs[0].length; i++) {
      checkChar = strs[0][i];

      for(let j = 0; j < strs.length; j++) {
          if ((strs.length - 1) === j && strs[j][i] === checkChar) {
              prefix += checkChar;
          } else if (strs[j][i] !== checkChar) {
              return prefix;
          }
      }
  }

  return prefix;
};

/*
  Testcase 1:
  Input: strs = ["flower","flow","flight"]
  Output: "fl"
*/

console.log('Testcase 1: ', longestCommonPrefix(["flower","flow","flight"]));

/*
  Testcase 2:
  Input: strs = ["dog","racecar","car"]
  Output: ""
*/

console.log('Testcase 2: ', longestCommonPrefix(["dog","racecar","car"]));