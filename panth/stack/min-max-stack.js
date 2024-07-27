// Feel free to add new properties and methods to the class.
class MinMaxStack {
    stack = [];
    minStack = [];
    maxStack = [];
  
    peek() {
      return this.stack[this.stack.length - 1]
    }
  
    pop() {
      const top = this.stack.pop();
      if (this.minStack[this.minStack.length - 1] === top) {
        this.minStack.pop();
      }
      if (this.maxStack[this.maxStack.length - 1] === top) {
        this.maxStack.pop();
      }
      return top;
    }
  
    push(number) {
      this.stack.push(number);
      if (!this.minStack.length) {
        this.minStack.push(number);
      }
      else if (this.minStack[this.minStack.length - 1] >= number) {
        this.minStack.push(number);
      }
      if (!this.maxStack.length) {
        this.maxStack.push(number);
      }
      else if (this.maxStack[this.maxStack.length - 1] <= number) {
        this.maxStack.push(number);
      }
    }
  
    getMin() {
      return this.minStack[this.minStack.length - 1];
    }
  
    getMax() {
      return this.maxStack[this.maxStack.length - 1];
    }
  }
  
  // Do not edit the line below.
  exports.MinMaxStack = MinMaxStack;
  
