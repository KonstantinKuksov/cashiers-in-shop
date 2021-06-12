import { Optional } from 'sequelize';

export enum Gender {
  Male = 'male',
  Female = 'female',
}

export enum DayOfWeek {
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
  Sunday = 'Sunday',
}

export enum Shedule {
  First = '07:00 - 15:00',
  Second = '15:00 - 23:00',
  Third = '23:00 - 07:00',
  AroundTheClock = '00:00 - 24:00',
}

export enum Shop {
  ATB = 'ATB',
  Silpo = 'Silpo',
  Arsen = 'Arsen',
  Tavria = 'Tavria',
  Ashan = 'Ashan',
}

export enum Locality {
  Lviv = 'Lviv',
  Kyiv = 'Kyiv',
  Kharkiv = 'Kharkiv',
  Lutsk = 'Lutsk',
  Odessa = 'Odessa',
}

export enum Address {
  LvivShevchenkoStr100 = 'Lviv, Shevchenko street, 100',
  LutskFrankaStr15 = 'Lutsk, Franka street, 15',
  OdessaDeribasivska65 = 'Odessa, Deribasivska street, 65',
  KyivNezalezhnostiMaidan40 = 'Kyiv, Nezalezhnosti maidan, 40',
  LvivShevchenkoAve2B = 'Lviv, Shevchenko avenue, 2B',
}

export interface ICashierAttributes {
  id?: number;
  name?: string;
  age?: number;
  gender?: Gender;
  yearsOfExperience?: number;
  isWorkingNow?: boolean;
  workShedule?: Shedule;
  previousAtb?: Address[];
  outputDays?: DayOfWeek[];
  previousJob?: Shop[];
  shopId?: number;
  cashRegister?: number;
}

export interface ICashierCreationAttributes
  extends Optional<ICashierAttributes, 'id'> {}

export interface ICashRegisterAttributes {
  id?: number;
  number: number;
  shopId: number;
}

export interface ICashRegisterCreationAttributes
  extends Optional<ICashRegisterAttributes, 'id'> {}

export interface IShopAttributes {
  id?: number;
  title: Shop;
  locality: Locality;
  address: Address;
}

export interface IShopCreationAttributes
  extends Optional<IShopAttributes, 'id'> {}
