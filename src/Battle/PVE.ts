import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _fighter: Fighter;
  private _enemies: (SimpleFighter | Fighter)[];
  constructor(fighter: Fighter, enemies: (SimpleFighter | Fighter)[]) {
    super(fighter);
    this._fighter = fighter;
    this._enemies = enemies;
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
    return super.fight();
  }
}
