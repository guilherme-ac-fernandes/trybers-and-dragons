import Fighter, { SimpleFighter } from '../Fighter';
import getRandomInt from '../utils';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _fighter: Fighter,
    private _enemies: SimpleFighter[],
  ) {
    super(_fighter);
  }

  public get fighter(): Fighter {
    return this._fighter;
  }

  public get enemies(): SimpleFighter[] {
    return this._enemies;
  }
  
  fight(): number {
    const enemyLifePoints = this._enemies
      .reduce((acc, curr) => acc + curr.lifePoints, 0);

    while (this._fighter.lifePoints > 0 && enemyLifePoints > 0) {
      const index = getRandomInt(0, this._enemies.length);
      const fighterStrength = this._fighter.strength;
      const enemyStrength = this._enemies[index].strength;
      
      // Ataque de turno do hero
      this._fighter.attack(this._enemies[index]);
      this._enemies[index].receiveDamage(getRandomInt(1, fighterStrength));
      
      // Ataque de um inimigo
      this._enemies[index].attack(this._fighter);
      this._fighter.receiveDamage(getRandomInt(1, enemyStrength));
    }

    const result = super.fight();
    return result;
  }
}
