function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getWinner(applicants, winnerObject) {
  let applicationNumber = Object.keys(applicants);
  let indexOfWinner = getRandomNumberInRange(0, applicationNumber.length);
  let winnerNumber = applicationNumber[indexOfWinner];
  console.log(winnerNumber);
  let winner = applicants[winnerNumber];
  console.log(winner);
  return { ...winnerObject, ...winner };
}

const todaysWinner = {
  prize: "10 000$",
};

const winnerApplicants = {
  "001": {
    name: "Максим",
    age: 25,
  },
  201: {
    name: "Светлана",
    age: 20,
  },
  304: {
    name: "Екатерина",
    age: 35,
  },
};

const resultWinner = getWinner(winnerApplicants, todaysWinner);
console.log("resultWinner", resultWinner);
// { prize: '10 000$', name: 'Максим', age: 25 }
