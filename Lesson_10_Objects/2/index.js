const ordersArr = [4, 2, 1, 3];
const people = [
  { id: 1, name: "Максим" },
  { id: 2, name: "Николай" },
  { id: 3, name: "Ангелина" },
  { id: 4, name: "Виталий" },
];
giveTalonsInOrder = (patients, orders) => {
  let talonsArr = [];
  orders.forEach((order) => {
    patients.forEach((patient) => {
      if (order === patient.id) {
        talonsArr.push(patient);
      }
    });
  });
  return talonsArr;
};
console.log(giveTalonsInOrder(people, ordersArr));
