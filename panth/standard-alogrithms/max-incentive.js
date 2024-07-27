function maxIncentive(tasks) {
    // Sort tasks by end date
    tasks.sort((a, b) => a[1] - b[1]);
  
    let maxIncentiveAtTime = new Array(tasks.length + 1).fill(0);
  
    for (let i = 1; i <= tasks.length; i++) {
      let [start, end, incentive] = tasks[i - 1];
      
      // Find the latest non-overlapping task
      let prevTaskIndex = binarySearch(tasks, i - 1);
  
      maxIncentiveAtTime[i] = Math.max(
        maxIncentiveAtTime[i - 1],
        maxIncentiveAtTime[prevTaskIndex] + incentive
      );
    }
  
    return maxIncentiveAtTime[tasks.length];
  }
  
  // Binary search to find the latest non-overlapping task
  function binarySearch(tasks, endIndex) {
    let low = 0, high = endIndex - 1;
    let startDateOfSelectedTask = tasks[endIndex][0];
    
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      const endDate = tasks[mid][1];
      if ( endDate <= startDateOfSelectedTask) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    
    return low;
  }
  
  // Example tasks: [start, end, incentive]
  let tasks = [
    [1, 3, 50],
    [1, 4, 100],
    [6, 8, 30]
  ];
  
  console.log(maxIncentive(tasks)); // Output: 130