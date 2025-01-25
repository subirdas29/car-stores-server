import express from 'express';
import { OrderController } from './order.controller';
import validationRequest from '../../middlewares/validateRequest';
import { orderValidation } from './order.validation';

const router = express.Router();

router.post('/',validationRequest(orderValidation.orderSchema), OrderController.createOrderController);

router.get('/', OrderController.getAllOrderController);

router.get('/:orderId', OrderController.oneOrderDetailsController);


router.get('/revenue', OrderController.ordersRevenueController);

export const OrderRoutes = router;

