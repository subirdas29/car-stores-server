import { model, Schema } from 'mongoose';
import { TOrder } from './order.interface';

const orderSchema = new Schema<TOrder>(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      match: [/\S+@\S+\.\S+/, 'Invalid email format'],
      trim: true,
    },
    car: {
      type: String,
      required: [true, 'Car is required'],
      trim: true,
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [1, 'Quantity must be at least 1'],
    },
    totalPrice: {
      type: Number,
      required: [true, 'Total price is required'],
      min: [0, 'Total price cannot be negative'],
    },
  },
  {
    timestamps: true,
  },
);

// Pre-save hook for calculating total price
orderSchema.pre('save', function (next) {
  if (this.quantity > 0 && this.totalPrice > 0) {
    this.totalPrice = this.quantity * this.totalPrice;
  }
  next();
});

// Export the model
export const Order = model<TOrder>('Order', orderSchema);
