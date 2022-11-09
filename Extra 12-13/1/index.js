const defender = {
  archer: 33,
  footSoldier: 50,
  cavalry: 40,
  artillery: 10,
};

const attacker = {
  archer: 30,
  footSoldier: 55,
  cavalry: 10,
  artillery: 3,
  checkChancesToWin(defenderObject) {
    const attackValues = Object.values(this);
    const defenderValues = Object.values(defenderObject);
    let attackChance = 0;
    attackValues.forEach((item, index) => {
      if (item > defenderValues[index]) {
        attackChance += 1;
      }
    });
    const maxChance = defenderValues.length;
    return [attackChance, maxChance];
  },
  improveArmy() {
    Object.values(this).map((item) => {
      if (typeof item === "number") {
        item += 5;
      }
      return item;
    });
  },
};
attacker.improveArmy();
console.log(attacker.checkChancesToWin(defender));
// attacker.attack(defender);
// attacker.attack(defender);
// attacker.attack(defender);
