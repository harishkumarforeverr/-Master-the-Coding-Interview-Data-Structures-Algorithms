# https://brilliant.org/wiki/heap-sort/

Heap Sort is a sorting algorithm that organizes elements using a binary heap data structure. It sorts in-place and has a time complexity of O(nlogn), similar to merge sort, making it efficient for large datasets. The algorithm involves building a max-heap from the unsorted array and repeatedly extracting the maximum element to sort the array.

Here's a simple breakdown:

1. **Building Max-Heap**: Convert the input array into a max-heap where the parent node is greater than its children.
2. **Sorting**: Extract the maximum element from the heap (which is always at the root) and place it at the end of the array. Reduce the heap size and ensure the remaining elements still form a max-heap.
3. **Repeat**: Continue extracting the maximum element and adjusting the heap until all elements are sorted.

Pros:

- Time-efficient with O(nlogn) time complexity.
- Uses less memory since it's an in-place sort.
- Performs consistently well across different scenarios.

Cons:

- Unstable sorting, meaning the relative order of equal elements may change.
- Not suitable for external sorting, where data is too large to fit into memory at once.

Overall, heap sort offers a balance between speed and memory usage, making it a good choice for various sorting needs. 

# https://stackoverflow.com/questions/2467751/quicksort-vs-heapsort

Quicksort is preferred over heapsort in most cases due to its average-case time complexity of O(n log n) and its ability to perform in-place sorting efficiently. However, heapsort has a guaranteed worst-case time complexity of O(n log n) and is preferred for scenarios where worst-case performance is critical, such as in real-time systems or when dealing with large datasets that may lead to stack overflow issues with recursive algorithms like quicksort.