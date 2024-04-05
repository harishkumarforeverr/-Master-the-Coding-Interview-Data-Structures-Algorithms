const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

for (let i = 0, n = numbers.length, temp = 0; i < n; i++) {
  for (let j = 0; j < n - 1; j++) {
    if (numbers[j] > numbers[j + 1]) {
      temp = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = temp;
    }
  }
}

console.log(numbers);
