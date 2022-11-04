getKiller = (suspectInfo, deadPeople) => {
  let killerName;
  Object.entries(suspectInfo).forEach(([suspectName, peopleWereSeen]) => {
    const isKiller = deadPeople.every((deadName) =>
      peopleWereSeen.includes(deadName)
    );
    if (isKiller) {
      killerName = suspectName;
    }
  });
  return killerName;
};

const suspect = {
  James: ["Jacob", "Bill", "Lucas"],
  Johnny: ["David", "Kyle", "Lucas"],
  Peter: ["Lucy", "Kyle"],
};
const deadPeople = ["Lucas", "David"];

console.log(getKiller(suspect, deadPeople));

console.log(
  getKiller(
    {
      Brad: [],
      Megan: ["Ben", "Kevin"],
      Finn: [],
    },
    ["Ben"]
  )
);
