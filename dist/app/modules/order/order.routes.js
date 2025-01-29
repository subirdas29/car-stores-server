"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("./order.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const order_validation_1 = require("./order.validation");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_constant_1 = require("../user/user.constant");
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(user_constant_1.USER_ROLES.user), (0, validateRequest_1.default)(order_validation_1.orderValidation.orderSchema), order_controller_1.OrderController.createOrderController);
router.get("/verify", (0, auth_1.default)(user_constant_1.USER_ROLES.user), order_controller_1.OrderController.verifyPayment);
router.get('/', order_controller_1.OrderController.getAllOrderController);
router.get('/:orderId', order_controller_1.OrderController.oneOrderDetailsController);
router.get('/revenue', order_controller_1.OrderController.ordersRevenueController);
exports.OrderRoutes = router;
