import { z } from 'zod';

const orderSchemaValidation = z.object({
  email: z
    .string()
    .email({ message: 'Email must be a valid email address' })
    .min(1, { message: 'Email is required and cannot be empty' }),
  car: z
    .string()
    .min(1, { message: 'Car ID or name is required and cannot be empty' }),
  quantity: z
    .number()
    .int({ message: 'Quantity must be an integer' })
    .min(1, { message: 'Quantity must be at least 1' }),
  totalPrice: z
    .number()
    .min(0, { message: 'Total price must be a non-negative number' }),
});

export { orderSchemaValidation };
