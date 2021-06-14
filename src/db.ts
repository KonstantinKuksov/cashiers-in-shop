import {
  DataTypes,
  ModelDefined,
  Sequelize,
  QueryTypes,
} from 'sequelize';
import { Request, Response } from 'express';
import { ICashierAttributes, ICashierCreationAttributes } from './models';

export const sequelize = new Sequelize(
  `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
);

const Cashier: ModelDefined<
ICashierAttributes,
ICashierCreationAttributes> = sequelize.define(
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
  },
);

class CashierTable {
  create = async (req: Request, res: Response) => {
    const newCashier = req.body;
    const cashier = await Cashier.create(newCashier);
    return res.json(cashier);
  };

  getOne = async (req: Request, res: Response) => {
    const { id } = req.params;
    const cashier = await Cashier.findOne({
      where: { id },
    });
    return res.json(cashier);
  };

  getFilteredCashiers = async (req: Request, res: Response) => {
    const params = req.query;
    const cashiers = await Cashier.findAll({
      where: params,
      attributes: ['name'],
    });
    return res.json(cashiers);
  };

  getTargetCashiers1 = async (req: Request, res: Response) => {
    const cashiers = await sequelize.query(
      "SELECT * FROM cashier WHERE years_of_experience>5 AND ('Silpo'=any(previous_job) OR 'Arsen'=any(previous_job)) AND (shop_id=1 OR shop_id=2 OR 'Lviv, Shevchenko avenue, 2B'=any(previous_atb) OR 'Lviv, Shevchenko street, 100'=any(previous_atb))",
      {
        type: QueryTypes.SELECT,
      },
    );
    return res.json(cashiers);
  };

  getTargetCashiers2 = async (req: Request, res: Response) => {
    const cashiers = await sequelize.query(
      "SELECT * FROM cashier WHERE cash_register%2=1 AND shop_id=1 AND work_shedule='23:00 - 07:00' AND 'Monday'=any(work_days)",
      {
        type: QueryTypes.SELECT,
      },
    );
    return res.json(cashiers);
  };

  updateCasier = async (req: Request, res: Response) => {
    const updateData = req.body;
    const { id } = req.params;
    await Cashier.update(updateData, { where: { id } });
    return res.json({ message: 'Success!' });
  };

  delete = async (req: Request, res: Response) => {
    const { id } = req.params;
    await Cashier.destroy({ where: { id } });
    return res.json({ message: 'Success!' });
  };
}

export const cashierTable = new CashierTable();
