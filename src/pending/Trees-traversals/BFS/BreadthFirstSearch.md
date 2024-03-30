# explain me BreadthFirstSearch

The `BreadthFirstSearch` method in the `BinarySearchTree` class is used to traverse the tree in a breadth-first manner. Here's a brief explanation:

- It starts by initializing an empty array `list` to store the values of visited nodes.
- It also initializes a queue data structure to keep track of the nodes that need to be visited.
- The method begins with the root node and adds it to the queue.
- Then, it enters a loop where it dequeues the first node from the queue and adds its value to the `list`.
- If the dequeued node has left and/or right children, they are added to the queue.
- This process continues until there are no more nodes left in the queue.
- Finally, it returns the `list` containing the values of all the nodes visited in a breadth-first manner.

This approach ensures that nodes at the same level are visited before moving on to the next level, hence traversing the tree breadth-first.

Sure, here's an example of how the `BreadthFirstSearch` method works:

Suppose we have the following binary search tree:

```
       9
     /   \
    4     20
   / \   /  \
  1   6 15  170
```

Starting with the root node `9`, the breadth-first search would visit each level of the tree from left to right:

1. Begin with `9`, enqueue it.
2. Dequeue `9`, visit its children `4` and `20`, enqueue them.
3. Dequeue `4`, visit its children `1` and `6`, enqueue them.
4. Dequeue `20`, visit its children `15` and `170`, enqueue them.
5. Dequeue `1`, since it has no children, no further enqueue.
6. Dequeue `6`, since it has no children, no further enqueue.
7. Dequeue `15`, since it has no children, no further enqueue.
8. Dequeue `170`, since it has no children, no further enqueue.

The traversal sequence would be: `[9, 4, 20, 1, 6, 15, 170]`. This is the order in which the nodes are visited using breadth-first search.

Sure, here's a simple example of breadth-first search in JavaScript:

```javascript
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function breadthFirstSearch(root) {
  if (!root) return [];

  const queue = [root];
  const result = [];

  while (queue.length) {
    const currentNode = queue.shift();
    result.push(currentNode.value);

    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }

  return result;
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log(breadthFirstSearch(root)); // Output: [1, 2, 3, 4, 5, 6, 7]
```

This code defines a `TreeNode` class representing a node in a binary tree and a `breadthFirstSearch` function to perform the breadth-first traversal. Finally, an example binary tree is created, and its breadth-first traversal result is logged to the console.

if you want to user iterative or recussion approach, go by below code

```javascript
  BreadthFirstSearch(){
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode);

    while(queue.length > 0){
      currentNode = queue.shift();
      list.push(currentNode.value);
      if(currentNode.left) {
        queue.push(currentNode.left);
      }
      if(currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return list;
  }
  BreadthFirstSearchR(queue, list) {
    if (!queue.length) {
      return list;
    }
    const currentNode = queue.shift();
    list.push(currentNode.value);

    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }

    return this.BreadthFirstSearchR(queue, list);
  }

```
