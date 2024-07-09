/*
  Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

  In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

  Example 1:
    Input: rowIndex = 3
    Output: [1,3,3,1]

  Example 2:
    Input: rowIndex = 0
    Output: [1]

  Example 3:
    Input: rowIndex = 1
    Output: [1,1]

  Constraints:
    0 <= rowIndex <= 33

  Follow up: Could you optimize your algorithm to use only O(rowIndex) extra space?
*/

const getRow = function(rowIndex) {
  if (rowIndex === 0) return [1];
  const prevRow = getRow(rowIndex - 1);
  const currentRow = [1];
  
  for (let i = 1; i <= prevRow.length - 1; i++) {
      const sum = prevRow[i] + prevRow[i - 1];
      currentRow.push(sum);
  }

  currentRow.push(1);

  return currentRow;
};

/*
Example 1:
    Input: rowIndex = 3
    Output: [1,3,3,1]
*/

  console.log('Example 1: ', getRow(3));

/*
  Example 2:
    Input: rowIndex = 0
    Output: [1]
*/

console.log('Example 2: ', getRow(0));

/*
  Example 3:
    Input: rowIndex = 1
    Output: [1,1]
*/

console.log('Example 3: ', getRow(1));