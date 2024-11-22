import { model, Schema } from 'mongoose';
import { CarModel, TCar } from './car.interface';

const carSchema = new Schema<TCar, CarModel>(
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
      // min: [1, 'Please added quantity'],
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

carSchema.pre('findOneAndUpdate', function (next) {
  const update = this.getUpdate() as Partial<TCar>;

  if (update.quantity !== undefined) {
    if (update.quantity > 0) {
      update.isStock = true;
    } else {
      update.isStock = false;
    }
  }
  next();
});

carSchema.statics.updateCar = async function (carId: string, quantity: number) {
  const car = await this.findById(carId);

  if (!car) {
    throw new Error('Car not found');
  }

  if (car.quantity < quantity) {
    throw new Error('Insufficient stock for this car.');
  }

  car.quantity = car.quantity - quantity;

  if (car.quantity === 0) {
    car.isStock = false;
  }

  await car.save();

  return car;
};

export const Car = model<TCar, CarModel>('Car', carSchema);
