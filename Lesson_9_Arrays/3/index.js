const coffees = ["Latte", "Cappuccino", "Americano"];
let coffeeName;
let i = 0;
do {
  coffeeName = prompt(`Find coffee by name:`);
  if (coffeeName) {
    let coffeeIndex = coffees.findIndex(
      (item) => item.toLowerCase() === coffeeName.trim().toLowerCase()
    );
    if (coffeeIndex !== -1) {
      console.log(coffeeIndex, typeof coffeeIndex);
      alert(
        `Take your favorite coffee ${coffees[coffeeIndex]}. It ${
          coffeeIndex + 1
        }-th in our list of popular coffee.”`
      );
    } else {
      alert("Really sorry but this type of coffee not available now.");
    }
  } else {
    alert("Please enter coffee name");
  }
  i++;
} while (coffeeName !== "end");
