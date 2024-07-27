function kadanesAlgorithm(array) {
    // Write your code here.
    let sum = 0;
    let ans = -Infinity;
    for (const data of array) {
      sum = sum + data;
      if (sum > ans) {
        ans = sum; 
      }
      if (sum < 0) {
        sum = 0;
      }
    }
    return ans;
  }
  
  // Do not edit the line below.
  exports.kadanesAlgorithm = kadanesAlgorithm;
  