class Stack {
  constructor() {
    this.arr = [];
    this.length = 0;
  }
  peek() {
    return this.arr[this.length - 1];
  }
  push(value) {
    this.arr.push(value);
    this.length++;
  }
  pop() {
    this.arr.pop();
    this.length--;
  }
}


const myStack = new Stack();
myStack.peek();
myStack.push('google');
myStack.push('ztm');
myStack.push('discord');
myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();


//Discord
//ZTM
//google
