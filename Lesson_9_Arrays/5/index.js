let clientsEstimations = [];
askClientToGiveEstimation = () => {
  let estimation = Number(prompt("Как вы оцениваете нашу кофейню от 1 до 10?"));
  if (!isNaN(estimation) && estimation > 0 && estimation <= 10) {
    clientsEstimations.push(estimation);
  }
};
for (let i = 0; i < 5; i++) {
  askClientToGiveEstimation();
}
goodEstimations = clientsEstimations.filter((item) => item > 5);
notGoodEstimations = clientsEstimations.filter((item) => item <= 5);
alert(
  `Total good estimation: ${goodEstimations.length}; Total not good estimation: ${notGoodEstimations.length}`
);
console.log(clientsEstimations);
