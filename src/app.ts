import express, { Application, Request, Response } from 'express';
import { sequelize } from './db';

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
