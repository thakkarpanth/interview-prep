function powerset(array) {
    // Write your code here.
    const totalSubsets = Math.pow(2, array.length);
    console.log('z1 total subsets ', totalSubsets);
    const results = [];
    for (let i = 0 ; i < totalSubsets; i++) {
      const result = [];
      for (let j = 0 ; j < array.length ; j++) {
        if ((1 << j) & i) {
          result.push(array[j]);
        }
        // console.log('z2 debug ', i , j, 1 << j, result);
      }
      results.push(result);
    }
    console.log(results);
    return results;
  }
  powerset([1,2,3,4,5]);