getDateFormat = (date, separator) => {
  let year = date.getFullYear();
  let month =
    date.getMonth() < 10
      ? "0" + `${date.getMonth() + 1}`
      : `${date.getMonth() + 1}`;
  let day =
    date.getDate() < 10 ? "0" + `${date.getDate()}` : `${date.getDate()}`;
  return `${day}${separator}${month}${separator}${year}`;
};
let testData = new Date(2010.5);
console.log(getDateFormat(testData, "."));
