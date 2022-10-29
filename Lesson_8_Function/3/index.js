getDivisorsCount = (number = 1) => {
  let divider = 0;
  if (number <= 0 || !Number.isInteger(number)) {
    alert(`number должен быть целым числом и больше нуля!`);
    return;
  }
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      divider += 1;
    }
  }
  return divider;
};

console.log(getDivisorsCount(4));
console.log(getDivisorsCount(5));
console.log(getDivisorsCount(25));
console.log(getDivisorsCount(30));
