const generatePermutations = (str, start = 0, current = '') => {
  if (start === str.length) {
    console.log(current);
    return;
  }

  for (let i = start; i < str.length; i++) {
    generatePermutations(str, i + 1, current + str[i]);
  }
  generatePermutations(str, str.length, current);
};

generatePermutations("abc");
