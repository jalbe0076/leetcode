/*
  Given two strings s and t, return true if t is an anagram of s, and false otherwise.

  An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

  Example 1:
    Input: s = "anagram", t = "nagaram"
    Output: true

  Example 2:
    Input: s = "rat", t = "car"
    Output: false

  Constraints:
    1 <= s.length, t.length <= 5 * 104
    s and t consist of lowercase English letters.
*/

const isAnagram = function(s, t) {
  if (s.length !== t.length) return false;

  const chars = {};

  for (let i = 0; i < s.length; i++) {
      if (!chars[s[i]]) {
          chars[s[i]] = 1;
      } else {
          chars[s[i]] = chars[s[i]] + 1;
      }
  }
  
  for (let j = 0; j < t.length; j++) {
      if (!chars[t[j]]) return false;
      chars[t[j]] = chars[t[j]] - 1;
  }

  return true;
};

/*
  Example 1:
    Input: s = "anagram", t = "nagaram"
    Output: true
*/

console.log('Example 1: ', isAnagram('anagram', 'nagaram'));

/*
  Example 2:
    Input: s = "rat", t = "car"
    Output: false
*/

console.log('Example 2: ', isAnagram('rat', 'car'));