import { Car } from '../car/car.model';
import { TOrder } from './order.interface';
import { Order } from './order.model';

const orderACar = async (orderData: TOrder) => {
  await Car.updateCar(orderData.car, orderData.quantity);

  const result = await Order.create(orderData);
  return result;
};

// Get All Orders
const allOrdersDetails = async () => {
  const result = await Car.find();
  return result;
};

// Get a Specific Order
const oneOrderDetails = async (id: string) => {
  const result = await Car.findById(id);
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
