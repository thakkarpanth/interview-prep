function mergeOverlappingIntervals(array) {
    const output = [];
    array.sort((a, b) => a[0] - b[0]);
    output.push(array[0]);
    for (const data of array) {
      const currentData = output.pop();
      if (data[0] > currentData[1]) {
        output.push(currentData);
        output.push(data);
      }
      else {
        currentData[1] = Math.max(currentData[1], data[1]);
        output.push(currentData);
      }
    }
    return output;
  }
/* 
{
  "intervals": [
    [1, 2],
    [3, 5],
    [4, 7],
    [6, 8],
    [9, 10]
  ]
}
*/

/* 
[
  [1, 2],
  [3, 8],
  [9, 10]
]
*/