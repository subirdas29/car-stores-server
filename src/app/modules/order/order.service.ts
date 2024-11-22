import { Car } from '../car/car.model';
import { TOrder } from './order.interface';
import { Order } from './order.model';

const orderACar = async (orderData: TOrder) => {
  await Car.updateCar(orderData.car, orderData.quantity);

  const result = await Order.create(orderData);
  return result;
};

const orderRevenue = async () => {
  const result = await Order.find();
  return result;
};

export const OrderDetails = {
  orderACar,
  orderRevenue,
};
