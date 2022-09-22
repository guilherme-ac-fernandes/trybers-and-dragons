import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static _amount = 0;
  private _ability: EnergyType;

  constructor(name: string) {
    super(name);
    Mage._amount += 1;
    this._ability = 'mana';
  }

  public static createdArchetypeInstances(): number {
    return this._amount;
  }

  get energyType(): EnergyType {
    return this._ability;
  }
}