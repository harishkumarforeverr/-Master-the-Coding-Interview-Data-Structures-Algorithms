const fibonacciRecursive = (n) => {
if (n == 1 || n == 2) return n - 1;
return fibonacciRecursive(n-1) + fibonacciRecursive(n-2)
};

console.log(fibonacciRecursive(6))

---

The call stack for the `fibonacciRecursive` function with an input of 6 would look like this:

1. `fibonacciRecursive(6)`
2. `fibonacciRecursive(5) + fibonacciRecursive(4)`
3. `(fibonacciRecursive(4) + fibonacciRecursive(3)) + (fibonacciRecursive(3) + fibonacciRecursive(2))`
4. `((fibonacciRecursive(3) + fibonacciRecursive(2)) + (fibonacciRecursive(2) + fibonacciRecursive(1))) + ((fibonacciRecursive(2) + fibonacciRecursive(1)) + (fibonacciRecursive(1) + fibonacciRecursive(0)))`

Each recursive call adds a new frame to the stack until it reaches the base cases (`n == 1` or `n == 2`), at which point the recursion starts to unwind, and the stack begins to pop frames off until it reaches the original call.

The final result is the sum of all the individual Fibonacci numbers calculated along the way.
