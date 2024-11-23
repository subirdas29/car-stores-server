/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { carServices } from './car.service';

// Centralized error handler for Validation and Not Found errors
const handleControllerError = (err: any, res: Response) => {
  if (err.name === 'ValidationError') {
    // Handle validation errors
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      error: {
        name: err.name,
        errors: err.errors, // Detailed errors
      },
      stack: err.stack,
    });
  } else if (err.name === 'NotFoundError') {
    // Handle not found errors
    return res.status(404).json({
      success: false,
      message: err.message || 'Resource not found',
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

// Create a CarController
const carCreateController = async (req: Request, res: Response) => {
  try {
    const carDetails = req.body;
    const result = await carServices.createCarDetailsIntoDB(carDetails);

    res.status(200).json({
      success: true,
      message: 'Car created successfully',
      data: result,
    });
  } catch (err: any) {
    handleControllerError(err, res);
  }
};

// Get All CarsController
const allCarDetailsController = async (req: Request, res: Response) => {
  try {
    const result = await carServices.allCarsDetails();

    res.status(200).json({
      success: true,
      message: 'Cars retrieved successfully',
      data: result,
    });
  } catch (err: any) {
    handleControllerError(err, res);
  }
};

// Get One CarController
const oneCarDetailsController = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;
    const result = await carServices.oneCarDetails(carId);

    if (!result) {
      throw { name: 'NotFoundError', message: 'Car not found' }; // Throw 404 error
    }

    res.status(200).json({
      success: true,
      message: 'Car retrieved successfully',
      data: result,
    });
  } catch (err: any) {
    handleControllerError(err, res);
  }
};

// Update a CarController
const carUpdateController = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;
    const carData = req.body;
    const result = await carServices.carUpdate(carId, carData);

    if (!result) {
      throw { name: 'NotFoundError', message: 'Car not found for update' };
    }

    res.status(200).json({
      success: true,
      message: 'Car updated successfully',
      data: result,
    });
  } catch (err: any) {
    handleControllerError(err, res);
  }
};

// Delete CarController
const deleteCarController = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;
    const result = await carServices.carDelete(carId);

    if (!result) {
      throw { name: 'NotFoundError', message: 'Car not found for deletion' };
    }

    res.status(200).json({
      success: true,
      message: 'Car deleted successfully',
    });
  } catch (err: any) {
    handleControllerError(err, res);
  }
};

export const CarController = {
  carCreateController,
  allCarDetailsController,
  oneCarDetailsController,
  carUpdateController,
  deleteCarController,
};
