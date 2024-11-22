import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { CarRoutes } from './app/modules/car/car.routes';
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api/cars', CarRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server Live',
  });
});

export default app;
