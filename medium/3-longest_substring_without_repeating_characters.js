/*
  Given a string s, find the length of the longest 
  substring without repeating characters.

  Example 1:
    Input: s = "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3.

  Example 2:
    Input: s = "bbbbb"
    Output: 1
    Explanation: The answer is "b", with the length of 1.

  Example 3:
    Input: s = "pwwkew"
    Output: 3
    Explanation: The answer is "wke", with the length of 3.
    Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

  Constraints:
    0 <= s.length <= 5 * 104
    s consists of English letters, digits, symbols and spaces.
*/

var lengthOfLongestSubstring = function(s) {
  const storage = {};
  let maxCount = 0;
  let leftChar = 0;

  for(let i = 0; i < s.length; i++) {
      if(s[i] in storage && storage[s[i]] >= leftChar) {
          leftChar = storage[s[i]] + 1;
      }

      maxCount = Math.max(maxCount, i - leftChar + 1);
      storage[s[i]] = i;
  }    

  return maxCount;
};

/*
Example 1:
    Input: s = "abcabcbb"
    Output: 3
*/

console.log('Example 1: ', lengthOfLongestSubstring("abcabcbb"));

/*
  Example 2:
    Input: s = "bbbbb"
    Output: 1
*/

console.log('Example 2: ', lengthOfLongestSubstring("bbbbb"));

/*
  Example 3:
    Input: s = "pwwkew"
    Output: 3
*/

console.log('Example 3: ', lengthOfLongestSubstring("pwwkew"));