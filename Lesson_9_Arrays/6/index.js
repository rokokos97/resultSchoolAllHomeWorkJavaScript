const numbers = [10, 4, 100, -5, 54, 2];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i] ** 3;
}
console.log(sum);

sum = 0;
j = 0;
do {
  sum += numbers[j] ** 3;
  j++;
} while (j < numbers.length);
console.log(sum);

sum = 0;
let a = 0;
while (a < numbers.length) {
  sum += numbers[a] ** 3;
  a++;
}
console.log(sum);

sum = 0;
numbers.forEach((item) => (sum += item ** 3));
console.log(sum);

sum = 0;
sum = numbers.reduce((sum, item) => sum + item ** 3);
console.log(sum);
