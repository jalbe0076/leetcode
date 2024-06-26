/*
  Given an integer numRows, return the first numRows of Pascal's triangle.

  In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

  Example 1:
    Input: numRows = 5
    Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

  Example 2:
    Input: numRows = 1
    Output: [[1]]

  Constraints:
    1 <= numRows <= 30
*/

const generate = function(numRows) {
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1,1]];
  const result = [[1], [1,1]]
  let counter = 2;

  while (counter !== numRows) {
    const newRow = [1];
    const lastRow = result[result.length - 1];
    for (let i = lastRow.length - 1; i >= 1; i--) {
      const sum = lastRow[i] + lastRow[i - 1];
      newRow.push(sum);
    }
    newRow.push(1);
    result.push(newRow);
    counter++;
  }

  return result;
};

/*
  Example 1:
    Input: numRows = 5
    Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
*/

console.log('Example 1: ', generate(5));

/*
  Example 2:
    Input: numRows = 1
    Output: [[1]]
*/

console.log('Example 2: ', generate(1));