import Race from './Race';

export default class Orc extends Race {
  private static _amount = 0;
  private _lifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._amount += 1;
    this._lifePoints = 74;
  }

  public static createdRacesInstances(): number {
    return this._amount;
  }

  get maxLifePoints(): number {
    return this._lifePoints;
  }
}
