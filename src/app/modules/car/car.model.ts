import { model, Schema } from 'mongoose';
import { TCar } from './car.interface';

const carSchema = new Schema<TCar>(
  {
    brand: {
      type: String,
      required: [true, 'Brand Name is required'],
    },
    model: {
      type: String,
      required: [true, 'Model Name is required'],
    },
    year: {
      type: Number,
      required: [true, 'Year is required'],
    },

    price: {
      type: Number,
      required: true,
      min: [0, 'Price must be a positive number'],
    },
    category: {
      type: String,
      enum: {
        values: ['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible'],
        message: '{VALUE} is not a valid Category',
      },
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
    },
    isStock: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Car = model<TCar>('Car', carSchema);
