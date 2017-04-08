// PROMPT: Make a function to return the second largest
// value in a binary search tree

function secondLargest (root) {
  let parent;
  let found = false;

  function dive (node, parent) {
    if (!node.right) {
      if (found) return node;
      else if (!node.left && !found) return parent;
      else {
        found = true;
        let diver = dive(node.left, node);
        if (diver) return diver;
      }
    } else {
      let diver = dive(node.right, node);
      if (diver) return diver;
    }
  }
  return dive(root);
}