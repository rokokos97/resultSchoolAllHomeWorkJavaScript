const groceries = {
  "73Wakv": {
    name: "Orange Juice",
    price: 1.5,
    discount: 10,
  },
  "5L3db9": {
    name: "Chocolate",
    price: 2,
    discount: 0,
  },
};
const shoppingBag = [
  { productId: "73Wakv", count: 3 },
  { productId: "5L3db9", count: 23 },
];

getTotalPriceOfShoppingBag = (arr) => {
  let totalPrice = 0;
  arr.forEach((item) => {
    Object.entries(groceries).forEach((iter) => {
      if (item.productId === iter[0]) {
        totalPrice +=
          (iter[1].price - iter[1].price * (iter[1].discount / 100)) *
          item.count;
      }
    });
  });
  return totalPrice;
};

console.log(getTotalPriceOfShoppingBag(shoppingBag));
