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

app.use(express.json());

app.get('/cashiers/get/:id', cashierTable.getOne);

app.get('/cashiers/get', cashierTable.getFilteredCashiers);

app.get('/cashiers/target1', cashierTable.getTargetCashiers1);

app.get('/cashiers/target2', cashierTable.getTargetCashiers2);

app.post('/cashiers/create', cashierTable.create);

app.patch('/cashiers/update/:id', cashierTable.updateCasier);

app.delete('/cashiers/delete/:id', cashierTable.delete);

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
