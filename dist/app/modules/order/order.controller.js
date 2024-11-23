"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const order_service_1 = require("./order.service");
const order_validation_1 = require("./order.validation");
const createOrderController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderDetails = req.body;
        const zodParseData = order_validation_1.orderSchemaValidation.parse(orderDetails);
        const result = yield order_service_1.OrderDetails.orderACar(zodParseData);
        res.status(200).json({
            success: true,
            message: 'Order created successfully',
            data: result,
        });
    }
    catch (err) {
        {
            res.status(500).json({
                success: false,
                message: 'Something went wrong',
                error: err,
            });
        }
    }
});
const ordersRevenueController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_service_1.OrderDetails.orderRevenue();
        res.status(200).json({
            success: true,
            message: 'Revenue calculated successfully',
            data: result,
        });
    }
    catch (err) {
        {
            res.status(500).json({
                success: false,
                message: err.message || 'Something went wrong',
                error: err,
            });
        }
    }
});
exports.OrderController = {
    createOrderController,
    ordersRevenueController,
};
