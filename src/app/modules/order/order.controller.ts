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
    if (err.name === 'ValidationError') {
      res.status(400).json({
        message: 'Validation failed',
        success: false,
        error: {
          name: err.name,
          errors: err.errors,
        },
        stack: err.stack,
      });
    } else {
      // For other types of errors
      res.status(500).json({
        message: err.message || 'Something went wrong',
        success: false,
        error: {
          name: err.name,
          message: err.message,
          stack: err.stack,
        },
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
    if (err.name === 'ValidationError') {
      res.status(400).json({
        message: 'Validation failed',
        success: false,
        error: {
          name: err.name,
          errors: err.errors,
        },
        stack: err.stack,
      });
    } else {
      // For other types of errors
      res.status(500).json({
        message: err.message || 'Something went wrong',
        success: false,
        error: {
          name: err.name,
          message: err.message,
          stack: err.stack,
        },
      });
    }
  }
};

export const OrderController = {
  createOrderController,
  ordersRevenueController,
};
