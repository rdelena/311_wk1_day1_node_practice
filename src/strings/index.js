const split = (str, delim) => {
  // write code for strings.split
  return str.split(delim);
};

const pairs = (str) => {
  // write code for strings.pairs
  const pairArr = [];
  for (let i = 0; i < str.length; i += 2) {
    const pair = str.slice(i, i + 2);
    pairArr.push(pair);
  }
  return pairArr;
};

const reverse = (str) => {
  // write code for strings.reverse
  return str.split("").reverse().join("");
};

module.exports = {
  split,
  pairs,
  reverse,
};
