checkQuestionAnswer = (question, correctAnswer) => {
  let userAnswer = prompt(`${question}`).trim();
  if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    alert(`Answer is correct`);
  } else {
    alert(`Answer is not correct`);
  }
};
checkQuestionAnswer("Арбуз это фрукт или ягода?", "Ягода");
checkQuestionAnswer("Сколько в среднем зубов у взрослого человека?", "32");
checkQuestionAnswer("Как называется самая маленькая птица в мире?", "Колибри");
