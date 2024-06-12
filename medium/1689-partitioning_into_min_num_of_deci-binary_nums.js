/*
  A decimal number is called deci-binary if each of its digits is either 0 or 1 without any leading zeros. For example, 101 and 1100 are deci-binary, while 112 and 3001 are not.

  Given a string n that represents a positive decimal integer, return the minimum number of positive deci-binary numbers needed so that they sum up to n.

  Example 1:
    Input: n = "32"
    Output: 3
    Explanation: 10 + 11 + 11 = 32

  Example 2:
    Input: n = "82734"
    Output: 8

  Example 3:
    Input: n = "27346209830709182346"
    Output: 9

  Constraints:
    1 <= n.length <= 105
    n consists of only digits.
    n does not contain any leading zeros and represents a positive integer.

  PSEUDOCODE
    ci-binary digits are only 0 or 1:
    LOGIC
      - In a deci-binary system, each digit can only be either 0 or 1. This is because it's a binary system (base-2), and in each place (like units, tens, hundreds, etc.), you can only have 0 or 1.
      -Since a deci-binary digit can only be 0 or 1, the minimum number needed to represent any digit is 1. For instance, to represent the digit 5, you only need the deci-binary digit 1 in the units place (1 * 5 = 5).
      - Therefore, you can find the maximum digit in the input number and use that as the answer.

    Steps
      1. Split the string into an array and convert each element into a number
      2. Find and return the max number in the array
*/

const minPartitions = function(n) {
  const spreadNumber = n.split('').map(Number);
  const findMax = Math.max(...spreadNumber);
  return findMax;
};

/*
  Example 1:
    Input: n = "32"
    Output: 3
    Explanation: 10 + 11 + 11 = 32
*/

console.log('Example 1:', minPartitions('32'));

/*
  Example 2:
    Input: n = "82734"
    Output: 8
*/

console.log('Example 2:', minPartitions('82734'));

/*
  Example 3:
    Input: n = "27346209830709182346"
    Output: 9
*/

console.log('Example 3:', minPartitions('27346209830709182346'));