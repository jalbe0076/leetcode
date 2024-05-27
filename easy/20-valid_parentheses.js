/*
  Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

  An input string is valid if:
    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.
  
  Example 1:
    Input: s = "()"
    Output: true

  Example 2:
    Input: s = "()[]{}"
    Output: true

  Example 3:
    Input: s = "(]"
    Output: false
  
  Constraints:
    1 <= s.length <= 104
    s consists of parentheses only '()[]{}'.

  PSEUDOCODE
    data type = string
    determine if the brackets are properly closed - possibilities '()[]{}'

    Loop over the string
    Create an object value pair to pair the bracket types
    push opening brackets into array
    remove closing brackets from array if it matches the previous open bracket
*/

const isValid = function(s) {
  const brackets = [];
  const matchingBrackets = {
    '{' : '}',
    '(' : ')',
    '[' : ']'
  }

  for (let str of s) {
    if (matchingBrackets[brackets[brackets.length - 1]] === str) {
      brackets.pop()
    } 
    else brackets.push(str)
  }

  return (brackets.length === 0)
};

/*
  Example 1:
    Input: s = "()"
    Output: true
*/
console.log('Example 1: ', isValid('()'));

/*
  Example 2:
    Input: s = "()[]{}"
    Output: true
*/

console.log('Example 2: ', isValid('()[]{}'));

/*
  Example 3:
    Input: s = "(]"
    Output: false
*/

console.log('Example 3: ', isValid('(]'));