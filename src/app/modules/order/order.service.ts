import { TOrder } from './order.interface';
import { Order } from './order.model';

const orderACar = async (orderData: TOrder) => {
  const result = await Order.create(orderData);
  return result;
};

export const OrderDetails = {
  orderACar,
};
