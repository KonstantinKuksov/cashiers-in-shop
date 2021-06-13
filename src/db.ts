import { DataTypes, ModelDefined, Sequelize, Op, QueryTypes } from 'sequelize';
import {
  Address,
  DayOfWeek,
  ICashierAttributes,
  ICashierCreationAttributes,
  Shedule,
  Shop,
} from './models';

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
      years_of_experience: {
        type: DataTypes.INTEGER,
      },
      is_working_now: {
        type: DataTypes.BOOLEAN,
      },
      work_shedule: {
        type: DataTypes.STRING,
      },
      previous_atb: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      work_days: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      previous_job: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      shop_id: {
        type: DataTypes.INTEGER,
      },
      cash_register: {
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
      where: { is_working_now: true },
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

  async getTargetCashiers1() {
    const cashiers = await sequelize.query(
      `SELECT * FROM cashier WHERE years_of_experience>5 AND ('Silpo'=any(previous_job) OR 'Arsen'=any(previous_job)) AND (shop_id=1 OR shop_id=2 OR 'Lviv, Shevchenko avenue, 2B'=any(previous_atb) OR 'Lviv, Shevchenko street, 100'=any(previous_atb))`,
      {
        type: QueryTypes.SELECT,
      }
    );
    return console.log(cashiers);
  }

  async getTargetCashiers2() {
    const cashiers = await sequelize.query(
      `SELECT * FROM cashier WHERE cash_register%2=1 AND shop_id=1 AND work_shedule='23:00 - 07:00' AND 'Monday'=any(work_days)`,
      {
        type: QueryTypes.SELECT,
      }
    );
    return console.log(cashiers);
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
