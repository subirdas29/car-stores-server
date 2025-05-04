import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { CarRoutes } from '../modules/car/car.routes';
import { OrderRoutes } from '../modules/order/order.routes';
import { AuthRoutes } from '../modules/auth/auth.route';
import { ContactRoutes } from '../modules/Contact/Contact.routes';
import { SubscribeRoutes } from '../modules/Subscribe/Subscribe.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/user',
    route: UserRoutes,
  },
  {
    path: '/cars',
    route: CarRoutes,
  },
  {
    path: '/orders',
    route: OrderRoutes,
  },
  {
    path: '/contact',
    route:ContactRoutes ,
  },
  {
    path: '/subscribe',
    route:SubscribeRoutes ,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
