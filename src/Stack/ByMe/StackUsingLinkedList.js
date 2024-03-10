class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class StackUsingLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  peek() {
    return this.head;
  }
  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      let holdingPointer = this.head;
      this.head = node;
      this.head.next = holdingPointer;
    }
    this.length++;
  }
  pop() {
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    this.length--;
  }
}


const myStack = new StackUsingLinkedList();
console.log(myStack.push("google"));
console.log(myStack.push("google2"));
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());
//Discord
//ZTM
//google