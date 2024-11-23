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
const createOrderController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderDetails = req.body;
        const result = yield order_service_1.OrderDetails.orderACar(orderDetails);
        res.status(200).json({
            success: true,
            message: 'Order created successfully',
            data: result,
        });
    }
    catch (err) {
        if (err.name === 'ValidationError') {
            res.status(400).json({
                message: 'Validation failed',
                success: false,
                error: {
                    name: err.name,
                    errors: err.errors,
                },
                stack: err.stack,
            });
        }
        else {
            // For other types of errors
            res.status(500).json({
                message: err.message || 'Something went wrong',
                success: false,
                error: {
                    name: err.name,
                    message: err.message,
                    stack: err.stack,
                },
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
        if (err.name === 'ValidationError') {
            res.status(400).json({
                message: 'Validation failed',
                success: false,
                error: {
                    name: err.name,
                    errors: err.errors,
                },
                stack: err.stack,
            });
        }
        else {
            // For other types of errors
            res.status(500).json({
                message: err.message || 'Something went wrong',
                success: false,
                error: {
                    name: err.name,
                    message: err.message,
                    stack: err.stack,
                },
            });
        }
    }
});
exports.OrderController = {
    createOrderController,
    ordersRevenueController,
};
