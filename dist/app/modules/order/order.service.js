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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderServices = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const QueryBuilder_1 = __importDefault(require("../../builder/QueryBuilder"));
const car_model_1 = require("../car/car.model");
const order_constant_1 = require("./order.constant");
const order_model_1 = require("./order.model");
const orderACar = (orderData) => __awaiter(void 0, void 0, void 0, function* () {
    yield car_model_1.Car.updateCar(orderData.car, orderData.quantity);
    const result = yield order_model_1.Order.create(orderData);
    return result;
});
// Get All Orders
const allOrdersDetails = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const orderQuery = new QueryBuilder_1.default(order_model_1.Order.find(), query).filter()
        .sort()
        .paginate()
        .fields()
        .search(order_constant_1.orderSearchableFields);
    const result = yield orderQuery.modelQuery;
    const meta = yield orderQuery.countTotal();
    return {
        result,
        meta
    };
});
// Get a Specific Order
const oneOrderDetails = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.findById(id);
    return result;
});
const orderRevenue = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.aggregate([
        { $group: { _id: '$Order._id', totalRevenue: { $sum: '$totalPrice' } } },
        { $project: { totalRevenue: 1 } },
    ]);
    return result;
});
exports.OrderServices = {
    orderACar,
    orderRevenue,
    allOrdersDetails,
    oneOrderDetails
};
