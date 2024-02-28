class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SingelyLinkedList {
  constructor(value) {
    this.initialNode(value);
  }
  initialNode(value) {
    const node = new Node(value);
    this.head = node;
    this.tail = node;
    this.length = 1;
  }
  unshift(value) {
    if (!this.head) {
      return this.initialNode(value);
    }
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
  }
  push(value) {
    if (!this.head) {
      return this.initialNode(value);
    }
    const node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }
  insert(index, value) {
    if (index == 0) {
      return this.unshift(value);
    }
    const currentNode = this.traverseToIndex(index - 1);
    if (!currentNode) {
      return;
    }
    const node = new Node(value);
    node.next = currentNode?.next ?? null;
    if (!node.next) {
      this.tail = node;
    }
    currentNode.next = node;
    this.length++;
  }
  remove(index) {
    let currentNode = this.traverseToIndex(index - 1);
    if (index == 0) {
      this.head = this.head?.next ?? null;
      if (!this.head) {
        this.tail = null;
      }
      this.length--;
    }
    if (!currentNode) {
      return;
    }
    currentNode.next = currentNode.next.next ?? null;
    if (!currentNode.next) {
      this.tail = currentNode;
    }
    this.length--;
  }
  traverseToIndex(index) {
    if (!this.head) {
      console.log("List is empty");
      return;
    }
    if (index >= this.length || index < 0) {
      console.log("Invalid Index");
      return;
    }
    let initialList = 0;
    let node = this.head;
    while (initialList != index) {
      node = node.next;
      initialList++;
    }
    return node;
  }
  printList() {
    if (!this.head) {
      return console.log("List is empty");
    }
    let currentNode = this.head;
    let items = [];
    while (currentNode) {
      items.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(items);
  }
}

const list = new SingelyLinkedList(10);
list.remove(0);
list.insert(0, 6);
list.printList();
list.insert(0, 6);
list.unshift(9);
list.unshift(8);
list.push(17);
list.unshift(7);
list.push(12);
list.push(15);
list.printList();
list.insert(1, 1);
list.insert(0, 0);
list.insert(10, 0);
// list.remove(110);
list.printList();

console.log(list);
