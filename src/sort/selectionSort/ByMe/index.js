const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

for (let i = 0; i < numbers.length; i++) {
  let min = i;
  let temp = numbers[i];
  for (let j = i + 1; j < numbers.length; j++) {
    if (numbers[j] < numbers[min]) {
      min = j;
    }
  }
  numbers[i] = numbers[min];
  numbers[min] = temp;
}

console.log(numbers);
