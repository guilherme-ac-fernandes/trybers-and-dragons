import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  private _enemyLifePoints: number;
  constructor(
    private _fighter: Fighter,
    private _enemies: SimpleFighter[] = [new Monster()],
  ) {
    super(_fighter);
    this._enemyLifePoints = this._enemies
      .reduce((acc, curr) => acc + curr.lifePoints, 0);
  }

  public get fighter(): Fighter { return this._fighter; }
  public get enemies(): SimpleFighter[] { return this._enemies; }
  
  fight(): number {
    while (this._fighter.lifePoints > 0 && this._enemyLifePoints > 0) {
      // Ataque de turno do hero
      this._enemies.forEach((enemy) => {
        this._fighter.attack(enemy);
      });
      
      // Ataque de um inimigo
      this._enemies.forEach((enemy) => {
        enemy.attack(this._fighter);
      });
    }

    const lifeEnemies = this._enemies.filter((enemy) => enemy.lifePoints > 0);
    this._enemyLifePoints = lifeEnemies
      .reduce((acc, curr) => acc + curr.lifePoints, 0);
    
    const result = super.fight();
    return result;
  }
}
