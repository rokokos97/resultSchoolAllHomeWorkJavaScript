const mathSymbols = [">", "<", "=", "+", "-", "*", "/"];

getMathResult = (expression) => {
  let correctExpression = [...expression].filter(
    (item) => !isNaN(Number(item)) || mathSymbols.includes(item)
  );
  if (correctExpression.length < 3) {
    return "Error";
  }
  switch (correctExpression[1]) {
    case ">":
      return Number(correctExpression[0]) > Number(correctExpression[2]);
    case "<":
      return Number(correctExpression[0]) < Number(correctExpression[2]);
    case "=":
      return Number(correctExpression[0]) === Number(correctExpression[2]);
    case "+":
      return Number(correctExpression[0]) + Number(correctExpression[2]);
    case "-":
      return Number(correctExpression[0]) - Number(correctExpression[2]);
    case "*":
      return Number(correctExpression[0]) * Number(correctExpression[2]);
    case "/":
      return Number(correctExpression[0]) / Number(correctExpression[2]);
  }
};

console.log(getMathResult(["200", "+", 300])); // 500
console.log(getMathResult(["20", "-", "5"])); // 15
console.log(getMathResult([100, "/", 100])); // 1
console.log(getMathResult([2, "-", 2])); // 0
console.log(getMathResult(["5", ">", "10"])); // false
console.log(getMathResult(["5", "<", "10"])); // true
console.log(getMathResult(["1", "=", 1])); // true
console.log(getMathResult(["1", "**", 1])); // 'Ошибка'
