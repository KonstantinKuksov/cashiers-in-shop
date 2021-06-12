import { DataTypes, ModelDefined, Sequelize } from 'sequelize';
import { ICashierAttributes, ICashierCreationAttributes } from './models';

export const sequelize = new Sequelize(
  `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
);

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
      workShedule: {
        type: DataTypes.STRING,
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
      cashRegister: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: 'cashier',
    }
  );

class CashierTable {
  async create(newCashier: ICashierAttributes) {
    const cashier = await Cashier.create(newCashier);
    return console.log(cashier.toJSON());
  }

  async getAllCashiersList() {
    const cashiers = await Cashier.findAll({ attributes: ['name'] });
    return console.log(cashiers.map((name) => name.toJSON()));
  }

  async getWorkingCashiersList() {
    const cashiers = await Cashier.findAll({
      attributes: ['name'],
      where: { isWorkingNow: true },
    });
    return console.log(cashiers.map((name) => name.toJSON()));
  }

  async getOne(id: number) {
    const cashier = await Cashier.findOne({ where: { id } });
    return console.log(cashier?.toJSON());
  }

  async getFilteredCashier(params: ICashierAttributes) {
    const cashiers = await Cashier.findAll({ where: params });
    return console.log(cashiers.map((name) => name.toJSON()));
  }

  async updateCasier(id: number, updateData: ICashierAttributes) {
    const cashier = await Cashier.update(updateData, { where: { id } });
    return console.log('Success!');
  }

  async delete(id: number) {
    const cashier = await Cashier.destroy({ where: { id } });
    return console.log(cashier);
  }
}

export const cashierTable = new CashierTable();
