const goals = [8, 1, 1, 3, 2, -1, 5];

mostScoringMatch = (arr) => {
  let maxGoals = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (maxGoals < arr[i]) {
      maxGoals = arr[i];
    }
  }
  let number = arr.indexOf(maxGoals) + 1;
  alert(
    `Самый результативный матч был под номером ${number}. В нем было забито ${maxGoals} гол(ов).`
  );
};
mostScoringMatch(goals);

leastProductiveMatch = (arr) => {
  let minGoals = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= 0 && minGoals > arr[i]) {
      minGoals = arr[i];
    }
  }
  let arrOfNumbers = [];
  arr.find((item, index) => {
    if (item === minGoals) {
      arrOfNumbers.push(index + 1);
    }
  });
  let numbers = arrOfNumbers.join(", ");
  alert(
    `Самые не результативные матчи были под номерами ${numbers}. В каждом из них было забито по ${minGoals} мячу(а).`
  );
};
leastProductiveMatch(goals);

allSeasonGoals = (arr) => {
  const allSeasonGoals = arr
    .filter((item) => item >= 0)
    .reduce((sum, item) => sum + item);
  alert(`Общее количество голов за сезон равно ${allSeasonGoals}`);
};
allSeasonGoals(goals);

automaticDefeats = (arr) => {
  if (arr.includes(-1)) {
    alert(`Были автоматические поражения: да`);
  } else {
    alert(`Были автоматические поражения: нет`);
  }
};
automaticDefeats(goals);

averageGoalsPerMatch = (arr) => {
  let playMatches = arr.filter((item) => item >= 0);
  let numberOfGoals = Math.round(
    playMatches.reduce((sum, item) => sum + item) / playMatches.length
  );
  alert(`Среднее количество голов за матч равно ${numberOfGoals}`);
};
averageGoalsPerMatch(goals);

sortMatches = (arr) => {
  const sortedGoalsString = [...arr].sort((a, b) => a - b).join(", ");
  alert(`${sortedGoalsString}`);
};
sortMatches(goals);
