import { z } from 'zod';

const carSchema = z.object({
  body:z.object({
    brand: z.string().nonempty("Brand is required"),
  model: z.string().nonempty("Model is required"),
  year: z
    .number()
    .int("Year must be an integer")
    .min(1886, "Year must be 1886 or later") 
    .max(new Date().getFullYear(), "Year cannot be in the future"),
  price: z.number().min(0, "Price must be a positive number"),
  category: z.enum(['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible']),
  description: z.string().nonempty("Description is required"),
  quantity: z.number().int("Quantity must be an integer").min(0, "Quantity cannot be negative"),
  isStock: z.boolean().optional(), 
  createdAt: z.date().optional(), 
  updatedAt: z.date().optional(),
  })
});

export const CarValidation = {
   carSchema
  };
  
