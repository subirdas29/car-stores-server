import { Model, Types } from 'mongoose';
import { USER_ROLES } from './user.constant';

export type TMyOrders = {
  orders: Types.ObjectId;
  isDeleted: boolean;
};

export type TUser = {
  name: string;
  email: string;
  password: string;
  role: string;
  status: 'in-progress' | 'blocked';
  isDeleted?: boolean;
  phone?: string;
  address?: string;
  city?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export interface UserModel extends Model<TUser> {
  isThePasswordMatched(
    plainTextPassword: string,
    hashPassword: string,
  ): Promise<boolean>;
  isUserExist(email: string): Promise<TUser>;
}

export type TUserRole = keyof typeof USER_ROLES;
