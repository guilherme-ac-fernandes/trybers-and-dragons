import Character from '../Character';
import Fighter from '../Fighter';
import getRandomInt from '../utils';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    private _playerOne: Fighter,
    private _playerTwo: Fighter,
  ) {
    super(_playerOne);
  }

  public get playerOne(): Fighter {
    return this._playerOne;
  }

  public get playerTwo(): Fighter {
    return this._playerTwo;
  }
  
  fight(): number {
    while (this._playerOne.lifePoints > 0 && this._playerTwo.lifePoints > 0) {
      this._playerOne.attack(this._playerTwo);
      this._playerTwo.receiveDamage(getRandomInt(1, this._playerOne.strength));
      this._playerTwo.attack(this._playerOne);
      this._playerOne.receiveDamage(getRandomInt(1, this._playerTwo.strength));
    }
    const result = super.fight();
    return result;
  }
}
