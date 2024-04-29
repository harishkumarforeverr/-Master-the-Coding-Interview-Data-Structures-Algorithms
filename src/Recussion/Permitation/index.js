const permitation = (str) => {
  if (str.length == 1) return [str];
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let currentStr = str[i];
    let remaingStr = str.slice(0, i) + str.slice(i + 1);
    let allCombination = permitation(remaingStr);
    for (let j = 0; j < allCombination.length; j++) {
      result.push(currentStr + allCombination[j]);
    }
  }
  return result;
};

console.log(permitation("abc"));
