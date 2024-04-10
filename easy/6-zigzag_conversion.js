/*
  The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
  P   A   H   N
  A P L S I I G
  Y   I   R
  And then read line by line: "PAHNAPLSIIGYIR"
  Write the code that will take a string and make this conversion given a number of rows:
  string convert(string s, int numRows);
  
  Example 1:
    Input: s = "PAYPALISHIRING", numRows = 3
    Output: "PAHNAPLSIIGYIR"

  Example 2:
    Input: s = "PAYPALISHIRING", numRows = 4
    Output: "PINALSIGYAHRPI"
    Explanation:
    P     I    N
    A   L S  I G
    Y A   H R
    P     I

  Example 3:
    Input: s = "A", numRows = 1
    Output: "A"
  
  Constraints:
    1 <= s.length <= 1000
    s consists of English letters (lower-case and upper-case), ',' and '.'.
    1 <= numRows <= 1000 

  Pseudocode:
    create an array and fill it with empty strings
    initialize the index to 0
    determine if the step is increasing or decreasing and default it to 0
    iterate through the characters
    add the character to the index position
      if the step is = 0 set the step to 1
      if the step = the number of rows - 1 then start decreasing the steps
    join all array elements and return it
*/

const convert = function (s, numRows) {
  if (numRows === 1 || numRows >= s.length) {
    return s;
  }

  const zigZag = new Array(numRows).fill('');

  let index = 0;
  let step = 1;

  for (const char of s) {
    zigZag[index] += char;
    if (index === 0) {
      step = 1;
    } else if (index === numRows - 1) {
      step = -1;
    }
    index += step;
  }

  return zigZag.join('');
};

/*
   Example 1:
    Input: s = "PAYPALISHIRING", numRows = 3
    Output: "PAHNAPLSIIGYIR"
*/

console.log(convert("PAYPALISHIRING", 3));

/*
  Example 2:
    Input: s = "PAYPALISHIRING", numRows = 4
    Output: "PINALSIGYAHRPI"
*/

console.log(convert("PAYPALISHIRING", 4));

/*
  Example 3:
    Input: s = "A", numRows = 1
    Output: "A"
*/

console.log(convert("A", 1));
