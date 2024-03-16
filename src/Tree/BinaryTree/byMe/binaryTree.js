class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
      return;
    }
    let current = this.root;
    while (current) {
      if (node.value > current.value) {
        if (!current.right) {
          current.right = node;
          return;
        }
        current = current.right;
      } else {
        if (!current.left) {
          current.left = node;
          return;
        }
        current = current.left;
      }
    }
  }
  lookup(value) {
    if (!this.root) {
      return console.log("list is empty");
    }
    let current = this.root;
    while (current) {
      if (current.value == value) {
        return console.log("value found", current);
      }
      if (value > current.value) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
    console.log("no value found");
  }
  remove(root, value) {
    console.log("ewefdwsdef--",root)
    if (!root) return null;
    if (value > root.value) {
      console.log("ewefdwsdef",root)
      root.right = this.remove(root.right, value);
    } else if (value < root.value) {
      root.left = this.remove(root.left, value);
    } else {
      if (!root.right) {
        return root.left;
      }
      const node = this.findMinValue(root.right);
      // console.log("nodenodenode",root, node)
      root.value = node.value;
      root.right = this.remove(root.right, node.value);
    }
    return root;
  }
  findMinValue(root) {
    while (root?.left) {
      root = root.left;
    }
    return root;
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.remove(tree.root, 4);
// JSON.stringify(traverse(tree.root));
// console.log(tree.lookup(1));
console.log(tree);
//     9
//  4     20
//1  6  15  170
