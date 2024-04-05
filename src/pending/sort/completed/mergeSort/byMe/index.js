const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const mergeSort = (arr) => {
  if (arr.length == 1) return arr;
  let midIndex = Math.floor(arr.length / 2);
  let firstHalfArr = arr.slice(0, midIndex);
  let secondHalfArr = arr.slice(midIndex);
  return merge(mergeSort(firstHalfArr), mergeSort(secondHalfArr));
};

const merge = (arr1, arr2) => {
  let leftIndex = 0;
  let rightIndex = 0;
  let res = [];
  while (leftIndex < arr1.length && rightIndex < arr2.length) {
    if (arr1[leftIndex] < arr2[rightIndex]) {
      res.push(arr1[leftIndex]);
      leftIndex++;
    } else {
      res.push(arr2[rightIndex]);
      rightIndex++;
    }
  }
  while (leftIndex < arr1.length) {
    res.push(arr1[leftIndex]);
    leftIndex++;
  }
  while (rightIndex < arr2.length) {
    res.push(arr2[rightIndex]);
    rightIndex++;
  }
  return res;
};


console.log(mergeSort(numbers))