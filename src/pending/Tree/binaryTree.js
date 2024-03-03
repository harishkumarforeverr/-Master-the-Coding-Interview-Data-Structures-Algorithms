class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let node = new Node(value);
    if (!this.root) {
      this.root = node;
    } else {
      let prevNode = this.findNode(value);
      if (value > prevNode.value) {
        prevNode.right = node;
      } else {
        prevNode.left = node;
      }
    }
  }
  findNode(value) {
    let current = this.root;
    let prevNode = this.root;
    let infinite = 0;
    while (current) {
      prevNode = current;
      if (value > current.value) {
        current = current.right;
      } else {
        current = current.left;
      }
      if (infinite > 100) break;
      infinite++;
    }
    return prevNode;
  }
  lookup(value) {
    let current = this.root;
    let infinite = 0;
    while (current) {
      if (current.value == value) {
        break;
      } else if (current.value < value) {
        current = current.right;
      } else {
        current = current.left;
      }
      if (infinite > 100) break;
      infinite++;
    }
    console.log(current)
  }
  remove(){
    
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
// tree.remove(170);
// JSON.stringify(traverse(tree.root));
console.log(tree.lookup(20));
console.log(tree.lookup(120));
// console.log(tree);
//     9
//  4     20
//1  6  15  170

// function traverse(node) {
//   const tree = { value: node.value };
//   tree.left = node.left === null ? null : traverse(node.left);
//   tree.right = node.right === null ? null : traverse(node.right);
//   return tree;
// }
