function startGame(heroPlayer, enemyPlayer) {
  function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let i = 0;
  while (heroPlayer.health > 0 && enemyPlayer.health > 0) {
    let whoKickFirst = getRandomNumberInRange(0, 1);
    if (whoKickFirst === 0) {
      heroPlayer.heatEnemy(enemyPlayer);
    } else {
      enemyPlayer.heatHero(heroPlayer);
    }
  }
  if (enemyPlayer.health === 0) {
    alert(
      `${heroPlayer.name} победил! У него осталось ${heroPlayer.health} здоровья`
    );
  } else {
    alert(
      `${enemyPlayer.name} победил! У него осталось ${enemyPlayer.health} здоровья`
    );
  }
}

const hero = {
  name: "Batman",
  health: 100,
  heatEnemy: function (enemy) {
    enemy.health -= 10;
  },
};
const enemy = {
  name: "Joker",
  health: 100,
  heatHero: function (hero) {
    hero.health -= 10;
  },
};

startGame(hero, enemy);
