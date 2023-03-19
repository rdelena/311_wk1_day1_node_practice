const isEven = (num) => {
  // write code for numbers.isEven
  return num % 2 === 0;
};

const sum = (arr) => {
  // write code for numbers.sum
  return arr.reduce((a, b) => a + b);
};

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  for (let i = 0; i < arr.length; i++) {
    for (let x = i + 1; x < arr.length; x++) {
      if (arr[i] + arr[x] === sum) {
        return true;
      }
    }
  }
  return false;
};

module.exports = {
  isEven,
  sum,
  comboSum,
};
