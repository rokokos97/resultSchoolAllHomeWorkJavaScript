let correctAnswers = 0;
let incorrectAnswers = 0;

let answer1 = Number(prompt("Сколько будет 2 + 2?").trim());
answer1 === 4 ? (correctAnswers += 1) : (incorrectAnswers += 1);

let answer2 = Number(prompt("Сколько будет 2 * 2?").trim());
answer2 === 4 ? (correctAnswers += 1) : (incorrectAnswers += 1);

let answer3 = Number(
  prompt(
    "У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?"
  ).trim()
);
answer3 === 1 ? (correctAnswers += 1) : (incorrectAnswers += 1);

let answer4 = Number(
  prompt(
    "У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?"
  ).trim()
);
answer4 === 12 ? (correctAnswers += 1) : (incorrectAnswers += 1);

let answer5 = Number(prompt("Сколько будет 2 + 2 * 2?").trim());
answer5 === 6 ? (correctAnswers += 1) : (incorrectAnswers += 1);

alert(
  `Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}.`
);
