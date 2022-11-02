convertMsToDays = (timeInMs) => {
  return Math.round(timeInMs / 1000 / 60 / 60 / 24);
};

getDaysBeforeBirthday = (nextBirthdayDate) => {
  if (!(nextBirthdayDate instanceof Date)) {
    alert("Параметр должен быть экземпляром класса Date!");
  } else {
    return convertMsToDays(nextBirthdayDate - new Date());
  }
};

console.log(getDaysBeforeBirthday(new Date(2023, 1, 11)));
