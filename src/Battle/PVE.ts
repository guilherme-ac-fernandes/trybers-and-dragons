import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  // private _enemyLifePoints: number;
  constructor(
    private _fighter: Fighter,
    private _enemies: (Fighter | SimpleFighter)[] = [new Monster()],
  ) {
    super(_fighter);
    // this._enemyLifePoints = this._enemies
    //   .reduce((acc, curr) => acc + curr.lifePoints, 0);
  }

  public get fighter(): Fighter { return this._fighter; }
  public get enemies(): SimpleFighter[] { return this._enemies; }
  
  fight(): number {
    this._enemies.forEach((enemy) => {
      while (this._fighter.lifePoints > 0 && enemy.lifePoints > 0) {
        this._fighter.attack(enemy);
        enemy.attack(this._fighter);
      }
    });

    const result = super.fight();
    return result;
  }
}
