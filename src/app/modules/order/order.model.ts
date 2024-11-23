import { model, Schema } from 'mongoose';
import { TOrder } from './order.interface';

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

orderSchema.pre('save', function (next) {
  if (this.quantity > 0) {
    this.totalPrice = this.quantity * this.totalPrice;
  }
  next();
});

export const Order = model<TOrder>('Order', orderSchema);
