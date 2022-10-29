getSumOfNumbers = (number, type) => {
  if (typeof number !== "number") {
    return NaN;
  }
  let sum = 0;
  switch (type) {
    case "":
      for (let i = 0; i <= number; i++) {
        sum += i;
      }
      return sum;
    case "odd":
      for (let i = 1; i <= number; i += 2) {
        sum += i;
      }
      return sum;
    case "even":
      for (let i = 0; i <= number; i += 2) {
        sum += i;
      }
      return sum;
  }
  // if (number && type === "") {
  //   let sum = 0;
  //   for (let i = 0; i <= number; i++) {
  //     sum += i;
  //   }
  //   return sum;
  // } else if (number && type === "even") {
  //   let sum = 0;
  //   for (let i = 0; i <= number; i += 2) {
  //     sum += i;
  //   }
  //   return sum;
  // } else if (number && type === "odd") {
  //   let sum = 0;
  //   for (let i = 1; i <= number; i += 2) {
  //     sum += i;
  //   }
  //   return sum;
  // }
};
console.log(getSumOfNumbers(10, ""));
console.log(getSumOfNumbers(10, "even"));
console.log(getSumOfNumbers(10, "odd"));
