import express, { Application, Request, Response } from 'express';
import { cashierTable, sequelize } from './db';
import {
  Address,
  DayOfWeek,
  Gender,
  ICashRegisterAttributes,
  Locality,
  Shedule,
  Shop,
} from './models';

const app: Application = express();
const PORT = process.env.PORT || 5500;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello!');
});

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Server has been started on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
