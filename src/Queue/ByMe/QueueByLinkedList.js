class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first ? this.first.value : null;
  }
  enqueue(value) {
    const node = new Node(value);
    if (!this.first) {
      this.first = node;
      this.last = node;
      this.length++;
      return;
    }
    this.last.next = node;
    this.last = node;
    this.length++;
  }
  dequeue() {
    this.first = this.first.next;
    if (!this.first) {
      this.last = null;
      this.length = 0;
    }
    this.length--;
  }
}

const myQueue = new Queue();
myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.enqueue("Samir");
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.peek();
console.log(myQueue);
//Joy
//Matt
//Pavel
//Samir
