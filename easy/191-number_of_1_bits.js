/*
  Write a function that takes the binary representation of a positive integer and returns the number of 
  set bits it has (also known as the Hamming weight).

  Example 1:
    Input: n = 11
    Output: 3
    Explanation:
    The input binary string 1011 has a total of three set bits.

  Example 2:
    Input: n = 128
    Output: 1
    Explanation:
    The input binary string 10000000 has a total of one set bit.

  Example 3:
    Input: n = 2147483645
    Output: 30
    Explanation:
    The input binary string 1111111111111111111111111111101 has a total of thirty set bits.

 
  Constraints:
    1 <= n <= 231 - 1
*/

const hammingWeight = function(n) {
  const binaryRep = n.toString(2);
  let counter = 0;
  for (let num of binaryRep) {
      if (num === '1') counter++;
  }
  return counter;
};

/*
Example 1:
    Input: n = 11
    Output: 3
*/

console.log('Example 1: ', hammingWeight(11));

/*
  Example 2:
    Input: n = 128
    Output: 1
*/

console.log('Example 2: ', hammingWeight(128));

/*
  Example 3:
    Input: n = 2147483645
    Output: 30
*/

console.log('Example 3: ', hammingWeight(2147483645));