import { Model } from 'mongoose';
import { USER_ROLES } from './user.constant';

export type TUser = {
  name: string;
  email: string;
  password: string;
  role: string;
};

export interface UserModel extends Model<TUser> {
  isThePasswordMatched(
    plainTextPassword: string,
    hashPassword: string,
  ): Promise<boolean>;
  isUserExist(id: string): Promise<TUser>;
}

export type TUserRole = keyof typeof USER_ROLES;
