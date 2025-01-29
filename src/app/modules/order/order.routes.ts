import express from 'express';
import { OrderController } from './order.controller';
import validationRequest from '../../middlewares/validateRequest';
import { orderValidation } from './order.validation';
import auth from '../../middlewares/auth';
import { USER_ROLES } from '../user/user.constant';

const router = express.Router();

router.post('/',auth(USER_ROLES.user), validationRequest(orderValidation.orderSchema), OrderController.createOrderController);

router.get("/verify", auth(USER_ROLES.user), OrderController.verifyPayment);

router.get('/', OrderController.getAllOrderController);

router.get('/:orderId', OrderController.oneOrderDetailsController);


router.get('/revenue', OrderController.ordersRevenueController);

export const OrderRoutes = router;

