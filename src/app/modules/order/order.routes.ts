import express from 'express';
import { OrderController } from './order.controller';


import auth from '../../middlewares/auth';
import { USER_ROLES } from '../user/user.constant';
import validationRequest from '../../middlewares/validateRequest';
import { orderValidation } from './order.validation';

const router = express.Router();

router.post('/',auth(USER_ROLES.user), 
validationRequest(orderValidation.orderSchema),
 OrderController.createOrderController);

router.get("/verify", OrderController.verifyPayment);

router.get('/', OrderController.getAllOrderController);

router.get('/:orderId', OrderController.oneOrderDetailsController);


router.delete('/:orderId',OrderController.deleteOrder)

router.get('/revenue', OrderController.ordersRevenueController);

export const OrderRoutes = router;

