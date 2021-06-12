import { DataTypes, ModelDefined } from 'sequelize';
import { sequelize } from '../db';
import { ICashierAttributes, ICashierCreationAttributes } from '../models';

const Cashier: ModelDefined<ICashierAttributes, ICashierCreationAttributes> =
  sequelize.define(
    'Cashier',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      age: {
        type: DataTypes.INTEGER,
      },
      gender: {
        type: DataTypes.STRING,
      },
      yearsOfExperience: {
        type: DataTypes.INTEGER,
      },
      isWorkingNow: {
        type: DataTypes.BOOLEAN,
      },
      previousAtb: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      outputDays: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      previousJob: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      shopId: {
        type: DataTypes.INTEGER,
      },
      cashRegisterId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: 'cashier',
    }
  );

export default Cashier;
