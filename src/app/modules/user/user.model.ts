import { model, Schema } from 'mongoose';
import { TMyOrders, TUser, UserModel } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';


const myOrderSchema = new Schema<TMyOrders>({
  orders: {
    type: Schema.Types.ObjectId,
    ref: 'Order', //eta nijer 7e nijer ref hyse
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

const userSchema = new Schema<TUser, UserModel>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: 0,
  },
  role: {
    type: String,
    default: 'user',
  },
  myorder:[myOrderSchema],
  isDeleted: {
    type: Boolean,
    default: false,
  },

},
{
  timestamps: true,
},
);

userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

userSchema.post('save', async function (doc, next) {
  doc.password = '';
  next();
});

userSchema.statics.isUserExist = async function (email: string) {
  return await User.findOne({ email }).select('+password');
};

userSchema.statics.isThePasswordMatched = async function (
  plainTextPassword,
  hashPassword,
) {
  return await bcrypt.compare(plainTextPassword, hashPassword);
};

export const User = model<TUser, UserModel>('User', userSchema);
