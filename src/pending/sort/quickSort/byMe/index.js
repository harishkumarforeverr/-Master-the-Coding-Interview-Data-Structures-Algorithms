const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const quickSort = (numbers) => {
  if (numbers?.length <= 1) return numbers;
  let pivot = numbers[0];
  let leftArr = [];
  let rightArr = [];
  for (let i = 1; i < numbers?.length; i++) {
    if (numbers[i] > pivot) {
      rightArr.push(numbers[i]);
    } else {
      leftArr.push(numbers[i]);
    }
  }
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

console.log(quickSort(numbers));
