import { model, Schema } from 'mongoose';
import { TOrder } from './order.interface';

import { statusEnum } from './order.constant';

 

const orderSchema = new Schema<TOrder>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "Car",
      required: true,
    },
    cars: [
      {
        car: {
          type: Schema.Types.ObjectId,
          ref: "Car",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    totalPrice: {
      type: Number,
      // required: opt,
    },
    status: {
      type: String,
      enum: statusEnum,
      default: "Pending",
    },
    transaction: {
      id: String,
      transactionStatus: String,
      bank_status: String,
      sp_code: String,
      sp_message: String,
      method: String,
      date_time: String,
    },
  },
  {
    timestamps: true,
  },
);

// Pre-save hook for calculating total price
// orderSchema.pre('save', function (next) {
//   if (this.quantity > 0 && this.totalPrice > 0) {
//     this.totalPrice = this.quantity * this.totalPrice;
//   }
//   next();
// });

// Export the model
export const Order = model<TOrder>('Order', orderSchema);
