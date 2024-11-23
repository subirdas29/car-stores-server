"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderSchemaValidation = void 0;
const zod_1 = require("zod");
const orderSchemaValidation = zod_1.z.object({
    email: zod_1.z
        .string()
        .email({ message: 'Email must be a valid email address' })
        .min(1, { message: 'Email is required and cannot be empty' }),
    car: zod_1.z
        .string()
        .min(1, { message: 'Car ID or name is required and cannot be empty' }),
    quantity: zod_1.z
        .number()
        .int({ message: 'Quantity must be an integer' })
        .min(1, { message: 'Quantity must be at least 1' }),
    totalPrice: zod_1.z
        .number()
        .min(0, { message: 'Total price must be a non-negative number' }),
});
exports.orderSchemaValidation = orderSchemaValidation;
