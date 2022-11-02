convertDayToMs = (days) => days * 24 * 60 * 60 * 1000;
addDays = (date, days) => {
  if (!(date instanceof Date)) {
    alert("Первый параметр должен быть экземпляром класса Date!");
  }
  if (!days || typeof days !== "number") {
    return date;
  } else {
    return new Date(date.getTime() + convertDayToMs(days));
  }
};
console.log(addDays(new Date(), 101));
