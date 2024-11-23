/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { carServices } from './car.service';
// import carSchemaValidation from './car.validation';

//Create a CarController
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

// Get One CarsController
const oneCarDetailsController = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;
    const result = await carServices.oneCarDetails(carId);

    res.status(200).json({
      success: true,
      message: 'Car retrieved successfully',
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

//Update a CarController
const carUpdateController = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;
    const carData = req.body;
    const result = await carServices.carUpdate(carId, carData);

    res.status(200).json({
      success: true,
      message: 'Car updated successfully',
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

//Delete CarController
const deleteCarController = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;
    await carServices.carDelete(carId);

    res.status(200).json({
      success: true,
      message: 'Car deleted successfully',
      result: {},
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

export const CarController = {
  carCreateController,
  allCarDetailsController,
  oneCarDetailsController,
  carUpdateController,
  deleteCarController,
};
