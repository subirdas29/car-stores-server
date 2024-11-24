import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { CarRoutes } from './app/modules/car/car.routes';
import { OrderRoutes } from './app/modules/order/order.routes';
const app: Application = express();

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server Live',
  });
});

app.use('/api/cars', CarRoutes);
app.use('/api/orders', OrderRoutes);



export default app;
