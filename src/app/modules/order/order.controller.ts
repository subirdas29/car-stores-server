/* eslint-disable @typescript-eslint/no-explicit-any */

import { OrderServices } from './order.service';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import httpStatus from 'http-status';




// Create Order Controller
const createOrderController = catchAsync(async (req, res) => {
  
  const result = await OrderServices.orderACar(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Order is created successfully',
    data: result,
  });
});

// Get All CarsController
const getAllOrderController = catchAsync(async (req, res) => {

  const result = await OrderServices.allOrdersDetails();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Orders fetched successfully",
    data: result,
  });
});

// Get One CarController
const oneOrderDetailsController =
catchAsync(async (req, res) => {
  const orderId = req.params.orderId;
  const result = await OrderServices.oneOrderDetails(orderId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Car fetched successfully",
    data: result,
  });
});



// Calculate Revenue Controller
const ordersRevenueController =catchAsync(async (req, res) => {

  const result = await OrderServices.orderRevenue();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Revenue calculated successfully',
    data: result,
  });
});



export const OrderController = {
  createOrderController,
  ordersRevenueController,
  getAllOrderController,
  oneOrderDetailsController
};
