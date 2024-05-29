/*
  Given the roots of two binary trees p and q, write a function to check if they are the same or not.

  Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

  Example 1:
    Input: p = [1,2,3], q = [1,2,3]
    Output: true

  Example 2:
    Input: p = [1,2], q = [1,null,2]
    Output: false
 
  Example 3:
    Input: p = [1,2,1], q = [1,1,2]
    Output: false
  
  Constraints:
    The number of nodes in both trees is in the range [0, 100].
    -104 <= Node.val <= 104
*/

const { arrayToTreeNode } = require('../tree_nodes');

var isSameTree = function(p, q) {
  if ((!p && q) || (p && !q)) return false;
  if ((!p && !q) && p !== q) return false;
  if ((!p && !q) && p === q) return true;
  if (p.val === q.val) {
      return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
  }
  return false;
};

/*
  Example 1:
    Input: p = [1,2,3], q = [1,2,3]
    Output: true
*/
console.log('Example 1: ', isSameTree(arrayToTreeNode([1,2,3]), arrayToTreeNode([1,2,3])));

/*
  Example 2:
    Input: p = [1,2], q = [1,null,2]
    Output: false
*/

console.log('Example 2: ', isSameTree(arrayToTreeNode([1,2]), arrayToTreeNode([1,null,2])));

/*
  Example 3:
    Input: p = [1,2,1], q = [1,1,2]
    Output: false
*/

console.log('Example 3: ', isSameTree(arrayToTreeNode([1,2,1]), arrayToTreeNode([1,1,2])));