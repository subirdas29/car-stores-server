"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarValidation = void 0;
const zod_1 = require("zod");
const carSchema = zod_1.z.object({
    body: zod_1.z.object({
        brand: zod_1.z.string().nonempty("Brand is required"),
        model: zod_1.z.string().nonempty("Model is required"),
        year: zod_1.z
            .number()
            .int("Year must be an integer")
            .min(1886, "Year must be 1886 or later")
            .max(new Date().getFullYear(), "Year cannot be in the future"),
        price: zod_1.z.number().min(0, "Price must be a positive number"),
        category: zod_1.z.enum(['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible']),
        description: zod_1.z.string().nonempty("Description is required"),
        quantity: zod_1.z.number().int("Quantity must be an integer").min(0, "Quantity cannot be negative"),
        isStock: zod_1.z.boolean().optional(),
        createdAt: zod_1.z.date().optional(),
        updatedAt: zod_1.z.date().optional(),
    })
});
exports.CarValidation = {
    carSchema
};
