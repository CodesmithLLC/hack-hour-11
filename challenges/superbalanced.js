/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function superbalanced(tree) {
  if (tree === null) {
    return true;
  }

  function height() {
    if (tree === null) {
      return 0;
    }
    return 1 + Math.max(height(tree.left), height(tree.right));
  }

  let lh = height(tree.left);
  let rh = height(tree.right);

  if (Math.abs(lh - rh) <= 1 && superbalanced(tree.left) && superbalanced(tree.right)) {
    return true;
  }
  return false;
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
