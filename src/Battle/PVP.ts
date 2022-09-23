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

const fight = (battle: Battle) => battle.fight();

const result = () => {
  const player1 = new Character('');
  for (let i = 0; i < 500; i += 1) player1.levelUp();
  const player2 = new Character('');
  const pvp1 = new PVP(player1, player2);

  const player3 = new Character('');
  for (let i = 0; i < 500; i += 1) player3.levelUp();
  const player4 = new Character('');
  const pvp2 = new PVP(player4, player3);

  return [fight(pvp1), fight(pvp2)];
};

console.log(result());
