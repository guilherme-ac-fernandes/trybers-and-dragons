import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  constructor(
    private _lifePoints = 85,
    private _strength = 63,
  ) {
    this._lifePoints = _lifePoints;
    this._strength = _strength;
  }

  public get lifePoints(): number { return this._lifePoints; }
  public get strength(): number { return this._strength; }

  receiveDamage(attackPoints: number): number {
    const lifeDamage = this._lifePoints - attackPoints;

    if (lifeDamage <= 0) {
      this._lifePoints = -1;
    } else {
      this._lifePoints = lifeDamage;
    }
    return this._lifePoints;
  }
  
  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}