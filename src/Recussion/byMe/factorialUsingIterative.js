// Given a number N return the index value of the Fibonacci sequence, where the sequence is:
// 1  2  3  4  5  6  7  8   9  10
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

const fibonacciRecursive = (n) => {
  if (n == 1 || n == 2) return n - 1;
  debugger;
  return fibonacciRecursive(n-1)+ fibonacciRecursive(n-2)
};
 

console.log(fibonacciRecursive(6))