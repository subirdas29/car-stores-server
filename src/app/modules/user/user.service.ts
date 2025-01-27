import QueryBuilder from '../../builder/QueryBuilder';
import { Order } from '../order/order.model';
import { userSearchableFields } from './user.constant';
import { TUser } from './user.interface';
import { User } from './user.model';

const registerUser = async (payload: TUser) => {
  const result = await User.create(payload);
  return result;
};

// Get All Cars
const getAllUsers = async (query:Record<string,unknown>) => {

  const userQuery = new QueryBuilder(User.find(),query)
  .filter()
  .sort()
  .paginate()
  .fields()
  .search(userSearchableFields)

  const result = await userQuery.modelQuery
  const meta = await userQuery.countTotal()
  return {
    result,
    meta
  };
};

const getMyOrder = async (email:string,query:Record<string,unknown>) => {




  const userQuery = new QueryBuilder(Order.find({email:email}).populate('car'),query)
  .filter()
  .sort()
  .paginate()
  .fields()
  .search(userSearchableFields)

  const result = await userQuery.modelQuery
  const meta = await userQuery.countTotal()
  return {
    result,
    meta
  };
};

const getMe = async (email: string, role: string) => {
  let result = null;

  if (role === 'admin') {
    result = await User.findOne({ email})
  }

  if (role === 'user') {
    result = await User.findOne({ email })
  }

  return result;
};


export const UserServices = {
  registerUser,
  getAllUsers,
  getMe,getMyOrder
};
