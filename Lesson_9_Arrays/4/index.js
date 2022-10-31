const coffees = ["Latte", "Cappuccino", "Americano"];
const prices = [1.5, 1, 2];
for (let i = 0; ; i++) {
  let howMuchMore = Number(prompt("How much more price now?"));
  changePrice = (howMuchMore) => {
    let newPrices = prices.map((item) => item + howMuchMore);
    coffees.forEach((item, index) =>
      alert(`Кофе ${item} сейчас стоит ${newPrices[index]} евро`)
    );
  };
  changePrice(howMuchMore);
}
