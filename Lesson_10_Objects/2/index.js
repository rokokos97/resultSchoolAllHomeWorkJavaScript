const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let newArr = [];
matrix.forEach((item) => newArr.push(...item));
console.log(newArr);
