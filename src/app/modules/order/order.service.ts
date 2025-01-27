/* eslint-disable @typescript-eslint/no-explicit-any */
import QueryBuilder from '../../builder/QueryBuilder';

import httpStatus from 'http-status';

import AppError from '../../errors/AppError';

import { User } from '../user/user.model';

import { orderSearchableFields } from './order.constant';
import { TOrder } from './order.interface';
import { Order } from './order.model';

const orderACar = async (orderData: TOrder,) => {
  const user = await User.findOne({email:orderData.email})

  if(!user){
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !')
  }

  if(user?.status === 'deactivate'){
    throw new AppError(httpStatus.BAD_REQUEST, 'Your Account is Deactivate by admin!')
  }

  if(user?.isDeleted === true){
    throw new AppError(httpStatus.BAD_REQUEST, 'Your Account is Deleted !')
  }

  const result = await Order.create(orderData);
  return result;

};

// Get All Orders
const allOrdersDetails = async (query:Record<string,any>) => {

  const orderQuery = new QueryBuilder(Order.find().populate('car'),query).filter()
  .sort()
  .paginate()
  .fields()
  .search(orderSearchableFields)

  const result = await orderQuery.modelQuery;
  const meta = await orderQuery.countTotal();
  return {
    result,
    meta
  };
};

// Get a Specific Order
const oneOrderDetails = async (id: string) => {
  const result = await Order.findById(id).populate('car');
  return result;
};




const orderRevenue = async () => {
  const result = await Order.aggregate([
    { $group: { _id: '$Order._id', totalRevenue: { $sum: '$totalPrice' } } },
    { $project: { totalRevenue: 1 } },
  ]);
  return result;
};

export const OrderServices = {
  orderACar,
  orderRevenue,
  allOrdersDetails,
  oneOrderDetails
};
