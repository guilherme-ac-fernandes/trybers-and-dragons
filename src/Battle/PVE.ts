import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
// import getRandomInt from '../utils';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _fighter: Fighter,
    private _enemies: SimpleFighter[],
  ) {
    super(_fighter);
  }

  public get fighter(): Fighter { return this._fighter; }
  public get enemies(): SimpleFighter[] { return this._enemies; }
  
  fight(): number {
    // let enemyLifePoints = this._enemies
    //   .reduce((acc, curr) => acc + curr.lifePoints, 0);

    // while (this._fighter.lifePoints > 0 && enemyLifePoints > 0) {
    //   enemyLifePoints = this._enemies
    //     .filter((enemy) => enemy.lifePoints > 0)
    //     .reduce((acc, curr) => acc + curr.lifePoints, 0);

    //   this._fighter.attack(this._enemies[0]);
    //   this.enemies[0].receiveDamage(20);

    //   this._enemies[0].attack(this._fighter);
    //   this._fighter.receiveDamage(20);
    // }

    // while (this._fighter.lifePoints > 0 && enemyLifePoints > 0) {
    //   const index = getRandomInt(0, this._enemies.length);
    //   const fighterStrength = getRandomInt(1, this._fighter.strength);
    //   const enemyStrength = getRandomInt(1, this._enemies[index].strength);
      
    //   // Ataque de turno do hero
    //   this._fighter.attack(this._enemies[index]);
    //   this._enemies[index].receiveDamage(fighterStrength);
      
    //   // Ataque de um inimigo
    //   this._enemies[index].attack(this._fighter);
    //   this._fighter.receiveDamage(enemyStrength);
    // }

    const result = super.fight();
    return result;
  }
}

const fight = (battle: Battle) => battle.fight();

const result = () => {
  const player1 = new Character('');
  for (let i = 0; i < 100; i += 1) player1.levelUp();
  const monster = new Monster();
  const pve1 = new PVE(player1, [monster]);

  const player2 = new Character('');
  const monsters: Monster[] = [];
  for (let i = 0; i < 100; i += 1) monsters.push(new Monster());
  const pve2 = new PVE(player2, monsters);

  return [fight(pve1), fight(pve2)];
};

console.log(result());
