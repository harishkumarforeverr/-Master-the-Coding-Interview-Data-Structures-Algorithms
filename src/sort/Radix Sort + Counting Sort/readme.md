# Radix Sort: [https://brilliant.org/wiki/radix-sort/](https://brilliant.org/wiki/radix-sort/)
Radix sort is a sorting algorithm that sorts numbers based on their individual digits from least significant to most significant. It uses a subroutine called counting sort to achieve this. Let's understand with an example:

Consider the list of numbers: [170, 45, 75, 90, 802, 24, 2, 66]

1. First, we sort the numbers based on the least significant digit (ones place) using counting sort. After this step, the list becomes: [170, 90, 802, 2, 24, 45, 75, 66]

2. Next, we sort based on the tens place. After this step, the list becomes: [802, 2, 24, 45, 66, 170, 75, 90]

3. Finally, we sort based on the hundreds place (if applicable). After this step, the list becomes fully sorted: [2, 24, 45, 66, 75, 90, 170, 802]

This process ensures that the numbers are sorted in the correct order by considering each digit's significance.

In the given example, to sort the list [0, 33, 100, 2, 14, 27, 101, 104, 8], radix sort would perform three passes of counting sort: first for the ones place, then for the tens place, and finally for the hundreds place (if applicable). Each pass sorts the numbers based on the corresponding digit's value.

# Radix Sort Animation: [https://www.cs.usfca.edu/~galles/visualization/RadixSort.html](https://www.cs.usfca.edu/~galles/visualization/RadixSort.html)

# Counting Sort: [https://brilliant.org/wiki/counting-sort/](https://brilliant.org/wiki/counting-sort/)
Radix sort and counting sort are related algorithms, but they are not the same.

Counting sort is a stable sorting algorithm that operates by counting the number of occurrences of each unique element in the input list and then using arithmetic to determine the positions of each element in the sorted output array. It works efficiently when the range of elements in the input list is relatively small compared to the size of the list itself.

Radix sort, on the other hand, is a non-comparison-based sorting algorithm that operates by sorting elements based on their individual digits or characters. It does this by using counting sort as a subroutine to sort the elements based on each digit's value from least significant to most significant. Radix sort can operate on numbers represented in any base (not just base 10) and is particularly useful for sorting strings or numbers with multiple digits.

So, in summary, radix sort uses counting sort as a subroutine to achieve its sorting functionality, but they are distinct algorithms with different purposes and characteristics.


# Counting Sort Animation: [https://www.cs.usfca.edu/~galles/visualization/CountingSort.html](https://www.cs.usfca.edu/~galles/visualization/CountingSort.html)
