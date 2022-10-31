getSumOfSequence = (number) => {
  let arrOfNumbers = [];
  for (let i = 1; i <= number; i++) {
    arrOfNumbers.push(i);
  }
  return arrOfNumbers[0] + arrOfNumbers[arrOfNumbers.length - 1];
};
console.log(getSumOfSequence(10));
