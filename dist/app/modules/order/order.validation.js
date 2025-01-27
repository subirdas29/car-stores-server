"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderValidation = void 0;
const zod_1 = require("zod");
const orderSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string().email("Invalid email address"),
        car: zod_1.z.string().optional(),
        quantity: zod_1.z
            .number()
            .int("Quantity must be an integer")
            .min(1, "Quantity must be at least 1"),
        totalPrice: zod_1.z.number().min(0, "Total price must be a positive number"),
        createdAt: zod_1.z.date().optional(),
        updatedAt: zod_1.z.date().optional(),
    })
});
exports.orderValidation = {
    orderSchema
};
