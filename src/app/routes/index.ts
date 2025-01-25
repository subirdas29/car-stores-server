import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { CarRoutes } from '../modules/car/car.routes';
import { OrderRoutes } from '../modules/order/order.routes';


const router = Router();

const moduleRoutes = [
  
    // app.use('//cars', CarRoutes);
    // app.use('/api/orders', OrderRoutes);
    {
        path:'/user',
        route:UserRoutes
    },
  {
    path: '/cars',
    route: CarRoutes,
  },
  {
    path: '/orders',
    route: OrderRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
