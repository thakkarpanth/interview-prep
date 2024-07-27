function nextGreaterElement(array) {
    // Write your code here.
    const stack = [], result = [];
    for (let i = 0 ; i < array.length ; i++) result.push(-1);
    stack.push(0);
    for (let i = 1; i < 2 * array.length ; i++) {
      const idx = i % array.length;
      while(stack.length && array[stack[stack.length - 1]] < array[idx]) {
        if (result[stack[stack.length - 1]] === -1) {
          result[stack[stack.length - 1]] = array[idx];
        }
        stack.pop();
      }
      stack.push(idx);
      
    }
    console.log('z1 stack ', stack);
    return result;
  }
  
/* 
sample input 
{
    "array": [2, 5, -3, -4, 6, 7, 2]
} 
[5,6,6,6,7,-1,5]
*/