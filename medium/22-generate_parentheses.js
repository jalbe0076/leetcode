/*
  Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

  Example 1:
    Input: n = 3
    Output: ["((()))","(()())","(())()","()(())","()()()"]

  Example 2:
    Input: n = 1
    Output: ["()"]

  Constraints:
    1 <= n <= 8
*/

const generateParenthesis = function(n) {
  const result = [];
  let stack = [{open: 0, close: 0, parenthesis: ''}];

  while(stack.length) {
      let {open, close, parenthesis} = stack.pop();

      if(parenthesis.length === n * 2) {
          result.push(parenthesis);
      }

      if(open > close) {
          stack.push({open, close: close + 1, parenthesis: parenthesis + ')'});
      } 
      
      if(open < n) {
          stack.push({open: open + 1, close, parenthesis: parenthesis + '('});
      }
  }

  return result;
};

/*
  Example 1:
    Input: n = 3
    Output: ["((()))","(()())","(())()","()(())","()()()"]
*/

console.log('Example 1: ', generateParenthesis(3));

/*
  Example 2:
    Input: n = 1
    Output: ["()"]
*/

console.log('Example 2: ', generateParenthesis(1));