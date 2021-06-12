import { DataTypes, ModelDefined } from 'sequelize';
import { sequelize } from '../db';
import {
  ICashRegisterAttributes,
  ICashRegisterCreationAttributes,
} from '../models';

const CashRegister: ModelDefined<
  ICashRegisterAttributes,
  ICashRegisterCreationAttributes
> = sequelize.define(
  'CashRegister',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    number: {
      type: DataTypes.INTEGER,
    },
    shopId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: 'cashRegister',
  }
);

export default CashRegister;
