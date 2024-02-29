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
      // console.log("List is empty");
      return;
    }
    if (index >= this.length || index < 0) {
      // console.log("Invalid Index");
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
    // console.log(this.head)
    if (!this.head) {
       console.log("List is empty1");
      return;
    }
    let currentNode = this.head;
    let items = [];
    while (currentNode) {
      items.push(currentNode.value);
      currentNode = currentNode.next;
    } 
    console.log(items)
  }
  reverse() {
    let prev = this.head;
    let node = this.head.next;
    let infinite = 0;
    this.tail = this.head;
    while (node) {
      if (infinite > 100) break;
      infinite++;
      let currentNode = node.next;
      node.next = prev;
      prev = node;
      node = currentNode; 
    }
    this.tail.next = null;
    this.head = prev; 
  }
}

const list = new SingelyLinkedList(10);
list.remove(0);  
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.reverse(); 
list.printList();
console.log(list) 
