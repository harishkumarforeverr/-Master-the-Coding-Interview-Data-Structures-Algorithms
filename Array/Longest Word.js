function LongestWord(sen) {
  const words = sen.replace(/[^a-zA-Z\s]/g, "").split(" ");
  return words.reduce(
    (longest, current) => (current.length > longest.length ? current : longest),
    ""
  );
}

console.log(LongestWord("fun&!! time")); // Output: time
console.log(LongestWord("I love dogs")); // Output: love

// Certainly!

// `/[^a-zA-Z\s]/g` is a regular expression pattern used with the `replace()` method. Let's break it down:

// - `/`: The starting and ending slashes denote the beginning and end of the regular expression pattern.
// - `[^...]`: The `^` inside the square brackets `[]` means negation. It matches any character that is not in the specified set.
// - `a-zA-Z`: This part of the pattern matches any lowercase or uppercase alphabetic character.
// - `\s`: This matches any whitespace character, such as space, tab, or newline.
// - `/g`: This flag stands for "global" and tells the `replace()` method to replace all occurrences of the pattern, not just the first one.

// So, `/[^a-zA-Z\s]/g` matches any character that is not an alphabetic character (lowercase or uppercase) or a whitespace character. In the context of the `LongestWord()` function, this pattern is used to remove any non-alphabetic characters (like punctuation or special symbols) from the input string `sen`.
