"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const carSchemaValidation = zod_1.z.object({
    brand: zod_1.z
        .string()
        .min(1, { message: 'Brand Name is required and cannot be empty' }),
    model: zod_1.z
        .string()
        .min(1, { message: 'Model Name is required and cannot be empty' }),
    year: zod_1.z
        .number()
        .int({ message: 'Year must be an integer' })
        .gte(1886, {
        message: 'Year must be 1886 or later (the first car was built in 1886)',
    })
        .lte(new Date().getFullYear(), {
        message: `Year cannot be in the future (maximum: ${new Date().getFullYear()})`,
    }),
    price: zod_1.z
        .number()
        .min(0, { message: 'Price must be a positive number' })
        .refine((value) => Number.isFinite(value), {
        message: 'Price must be a valid number',
    }),
    category: zod_1.z.enum(['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible'], {
        errorMap: () => ({
            message: 'Invalid category. Must be one of Sedan, SUV, Truck, Coupe, or Convertible',
        }),
    }),
    description: zod_1.z
        .string()
        .min(1, { message: 'Description is required and cannot be empty' }),
    quantity: zod_1.z
        .number()
        .int({ message: 'Quantity must be an integer' })
        .min(0, { message: 'Quantity cannot be negative' }),
    isStock: zod_1.z.boolean().optional(),
});
exports.default = carSchemaValidation;
