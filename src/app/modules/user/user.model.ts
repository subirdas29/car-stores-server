import { model, Schema } from 'mongoose';
import {  TUser, UserModel } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';
import { USER_ROLES } from './user.constant';




const userSchema = new Schema<TUser, UserModel>({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    immutable: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    select: 0,
  },
  role: {
    type: String,
    default: USER_ROLES.user,
  },

  isDeleted: {
    type: Boolean,
    default: false,
  },
  phone: { type: String, default: "N/A" },
  address: { type: String, default: "N/A" },
  city: { type: String, default: "N/A" },

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
