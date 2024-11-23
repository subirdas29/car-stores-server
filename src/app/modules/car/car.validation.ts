import { z } from 'zod';

const carSchemaValidation = z.object({
  brand: z
    .string()
    .min(1, { message: 'Brand Name is required and cannot be empty' }),
  model: z
    .string()
    .min(1, { message: 'Model Name is required and cannot be empty' }),
  year: z
    .number()
    .int({ message: 'Year must be an integer' })
    .gte(1886, {
      message: 'Year must be 1886 or later (the first car was built in 1886)',
    })
    .lte(new Date().getFullYear(), {
      message: `Year cannot be in the future (maximum: ${new Date().getFullYear()})`,
    }),
  price: z
    .number()
    .min(0, { message: 'Price must be a positive number' })
    .refine((value) => Number.isFinite(value), {
      message: 'Price must be a valid number',
    }),
  category: z.enum(['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible'], {
    errorMap: () => ({
      message:
        'Invalid category. Must be one of Sedan, SUV, Truck, Coupe, or Convertible',
    }),
  }),
  description: z
    .string()
    .min(1, { message: 'Description is required and cannot be empty' }),
  quantity: z
    .number()
    .int({ message: 'Quantity must be an integer' })
    .min(0, { message: 'Quantity cannot be negative' }),
  isStock: z.boolean().optional(),
});

export default carSchemaValidation;
