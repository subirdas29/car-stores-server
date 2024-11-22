import express from 'express';
import { OrderController } from './order.controller';

const router = express.Router();

router.post('/', OrderController.createOrderController);
router.get('/revenue', OrderController.ordersRevenueController);

export const OrderRoutes = router;
