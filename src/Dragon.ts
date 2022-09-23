// import { SimpleFighter } from './Fighter';
import Monster from './Monster';

export default class Dragon extends Monster {
  constructor(strength = 63) {
    super(999, strength);
  }

  // public get lifePoints(): number { return this._lifePoints; }
  // public get strength(): number { return this._strength; }

  // receiveDamage(attackPoints: number): number {
  //   const lifeDamage = this._lifePoints - attackPoints;

  //   if (lifeDamage > 0) {
  //     this._lifePoints = lifeDamage;
  //     if (lifeDamage <= 0) {
  //       this._lifePoints = -1;
  //     }
  //   }
  //   return this._lifePoints;
  // }
  
  // attack(enemy: SimpleFighter): void {
  //   enemy.receiveDamage(this._strength);
  // }
}