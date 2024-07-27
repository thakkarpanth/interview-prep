const helper = (data, start, end) => {
    const pivot = Math.floor((start + end) / 2);
    let left = start;
    let right = end;
    while (left <= right) {
        while (data[left] < data[pivot]) {
            left++;
        }
        while (data[right] > data[pivot]) {
            right--;
        }
        if (left <= right) {
            const temp = data[left];
            data[left] = data[right];
            data[right] = temp;
            left++;
            right--;
        }
    }
    return left;
};

const quickSort = (data, start = 0, end = data.length - 1) => {
    if (data.length < 2) {
        return data;
    }
    if (start < end) {
        const index = helper(data, start, end); 
        quickSort(data, start, index - 1);
        quickSort(data, index, end);
    }
    return data;
};

console.log(quickSort([6,5,4,2,3,1,8,10,9,7]));