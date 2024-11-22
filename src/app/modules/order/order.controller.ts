/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { OrderDetails } from './order.service';

const createOrderController = async (req: Request, res: Response) => {
  try {
    const orderDetails = req.body;
    const result = await OrderDetails.orderACar(orderDetails);

    res.status(200).json({
      success: true,
      message: 'Order created successfully',
      data: result,
    });
  } catch (err: any) {
    {
      res.status(500).json({
        success: false,
        message: err.message || 'Something went wrong',
        error: err,
      });
    }
  }
};

const ordersRevenueController = async (req: Request, res: Response) => {
  try {
    const result = await OrderDetails.orderRevenue();

    res.status(200).json({
      success: true,
      message: 'Revenue calculated successfully',
      data: result,
    });
  } catch (err: any) {
    {
      res.status(500).json({
        success: false,
        message: err.message || 'Something went wrong',
        error: err,
      });
    }
  }
};

export const OrderController = {
  createOrderController,
  ordersRevenueController,
};
