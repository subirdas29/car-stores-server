/* eslint-disable @typescript-eslint/no-explicit-any */
import QueryBuilder from '../../builder/QueryBuilder';
import { Car } from '../car/car.model';
import { orderSearchableFields } from './order.constant';
import { TOrder } from './order.interface';
import { Order } from './order.model';

const orderACar = async (orderData: TOrder) => {
  await Car.updateCar(orderData.car, orderData.quantity);

  const result = await Order.create(orderData);
  return result;
};

// Get All Orders
const allOrdersDetails = async (query:Record<string,any>) => {

  const orderQuery = new QueryBuilder(Order.find(),query).filter()
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
  const result = await Order.findById(id);
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
