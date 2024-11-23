/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { OrderDetails } from './order.service';

// Centralized error handler for Validation and Not Found errors
const handleControllerError = (err: any, res: Response) => {
  if (err.name === 'ValidationError') {
    // Handle validation errors
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      error: {
        name: err.name,
        errors: err.errors,
      },
      stack: err.stack,
    });
  } else if (err.message === 'Car not found') {
    // Handle not found errors
    return res.status(404).json({
      success: false,
      message: err.message || 'Not found',
      error: {
        name: err.name,
      },
    });
  } else {
    // Handle other types of errors
    return res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: {
        name: err.name,
        message: err.message,
        stack: err.stack,
      },
    });
  }
};

// Create Order Controller
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
    handleControllerError(err, res);
  }
};

// Calculate Revenue Controller
const ordersRevenueController = async (req: Request, res: Response) => {
  try {
    const result = await OrderDetails.orderRevenue();

    res.status(200).json({
      success: true,
      message: 'Revenue calculated successfully',
      data: result,
    });
  } catch (err: any) {
    handleControllerError(err, res);
  }
};

export const OrderController = {
  createOrderController,
  ordersRevenueController,
};
