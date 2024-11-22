import { model, Schema } from 'mongoose';
import { TOrder } from './order.interface';
import { Car } from '../car/car.model';

const orderSchema = new Schema<TOrder>(
  {
    email: {
      type: String,
      required: true,
    },
    car: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

orderSchema.pre('save', async function (next) {
  const carModel = await Car.findById(this.car);
  if (!carModel) {
    throw new Error('Car not Found');
  }

  if (carModel.quantity < this.quantity) {
    throw new Error('Insufficient stock for this car');
  }

  if (carModel.quantity > this.quantity) {
    carModel.quantity = carModel.quantity - this.quantity;
  }

  if (carModel.quantity === 0) {
    carModel.isStock = false;
  }
  next();
});

export const Order = model<TOrder>('Order', orderSchema);
