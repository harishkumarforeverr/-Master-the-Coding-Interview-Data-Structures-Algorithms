const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

for (let i = 1; i < numbers.length; i++) {
  let j = i - 1;
  let temp = numbers[i];
  while (j >= 0 && numbers[j] > temp) {
    numbers[j + 1] = numbers[j];
    j--;
  }
  numbers[j + 1] = temp; 
}
console.log(numbers);
