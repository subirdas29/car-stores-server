import { z } from 'zod';

const orderSchema = z.object({
  body:z.object({
    email: z.string().email("Invalid email address"), 
  car: z.string().nonempty("Car is required"), 
  quantity: z
    .number()
    .int("Quantity must be an integer")
    .min(1, "Quantity must be at least 1"), 
  totalPrice: z.number().min(0, "Total price must be a positive number"), 
  createdAt: z.date().optional(), 
  updatedAt: z.date().optional(), 
  })
});

export const orderValidation = {
    orderSchema
};
   