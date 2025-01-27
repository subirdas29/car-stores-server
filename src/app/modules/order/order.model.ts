import { model, Schema } from 'mongoose';
import { TOrder } from './order.interface';

const orderSchema = new Schema<TOrder>(
  {
    email: {
      type: String,
      required: true
    },
   car:{
    type: Schema.Types.ObjectId,
    ref: 'Car',
   },
    quantity: {
      type: Number,
      required: true
    },
    totalPrice: {
      type: Number,
     required:true
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
