/*
  Given two strings s and t, determine if they are isomorphic.

  Two strings s and t are isomorphic if the characters in s can be replaced to get t.

  All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

  Example 1:
    Input: s = "egg", t = "add"
    Output: true

  Example 2:
    Input: s = "foo", t = "bar"
    Output: false

  Example 3:
    Input: s = "paper", t = "title"
    Output: true
  
  Constraints:
    1 <= s.length <= 5 * 104
    t.length == s.length
    s and t consist of any valid ascii character.
*/

const isIsomorphic = function(s, t) {
  let objS = {};
  let objT = {};

  for(let i = 0; i < s.length; i++) {
      if(objS[s[i]] && (objS[s[i]] !== t[i])) return false;
      objS[s[i]] = t[i];
      if(objT[t[i]] && (objT[t[i]] !== s[i])) return false;
      objT[t[i]] = s[i];
  }
  return true;
};

/*
  Example 1:
    Input: s = "egg", t = "add"
    Output: true
*/

console.log('Example 1: ', isIsomorphic('egg', 'add'));

/*
  Example 2:
    Input: s = "foo", t = "bar"
    Output: false
*/

console.log('Example 1: ', isIsomorphic('foo', 'bar'));

/*
  Example 3:
    Input: s = "paper", t = "title"
    Output: true
*/

console.log('Example 3: ', isIsomorphic('paper', 'title'));