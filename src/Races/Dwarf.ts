import Race from './Race';

export default class Dwarf extends Race {
  private static _amount = 0;
  private _lifePoints: number;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    Dwarf._amount += 1;
    this._lifePoints = 80;
  }

  public static createdRacesInstances(): number {
    return this._amount;
  }

  get maxLifePoints(): number {
    return this._lifePoints;
  }
}