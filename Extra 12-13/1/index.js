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
    Object.entries(this).forEach((item) => {
      let key = item[0];
      let value = item[1];
      if (typeof value === "number") {
        this[key] = value + 5;
      }
      return this;
    });
  },
  attack(defenderObject) {
    let chance = this.checkChancesToWin(defenderObject);
    console.log(chance);
    const chanceValue = chance[0] / chance[1];
    console.log(chanceValue);
    if (chanceValue > 0.7) {
      alert("Мы усилились! Мы несомненно победим! Наши шансы высоки!");
    } else {
      alert(
        `Наши шансы равны ${this.checkChancesToWin(defenderObject)[0]}/${
          this.checkChancesToWin(defenderObject)[1]
        }. Необходимо укрепление!`
      );
      this.improveArmy();
    }
  },
};

attacker.attack(defender);
attacker.attack(defender);
attacker.attack(defender);
