let peopleWaiting = [
  "Кристина",
  "Олег",
  "Кирилл",
  "Мария",
  "Светлана",
  "Артем",
  "Глеб",
];

giveParcel = (array, number) => {
  for (let i = 0; i <= number - 1; i++) {
    alert(
      `${array.shift()} получил(а) посылку. В очереди осталось ${
        array.length
      } человек.`
    );
  }
};
leaveQueueWithoutParcel = (array, number) => {
  for (let i = 0; i <= number - 1; i++) {
    alert(`${array.shift()} не получил(а) посылку и ушел(ла) из очереди.`);
  }
};
giveParcel(peopleWaiting, 3);
leaveQueueWithoutParcel(peopleWaiting, peopleWaiting.length);
console.log(peopleWaiting);
